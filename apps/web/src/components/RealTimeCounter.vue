<template>
  <slot :time="timeFormatted">
    {{ time }}
  </slot>
</template>

<script setup lang="ts">
  // Core
  import type { Duration } from 'date-fns'
  import { formatDuration, intervalToDuration } from 'date-fns'
  import { computed, onMounted, ref } from 'vue'

  type FormatType = keyof Duration

  interface Props {
    name: string
    time: number
    format: FormatType[]
  }

  const props = withDefaults(defineProps<Props>(), {
    format: () => ['months', 'days', 'hours', 'minutes', 'seconds'],
  })

  const $emit = defineEmits<{
    (e: 'update:isTimeOver', value: boolean): void
    (e: 'update:timeFormated', value: boolean): void
  }>()

  const timerId = ref(null)

  const timerStopId = ref(null)
  const stoppedTime = ref(0)

  const _isTimeOver = ref(true)

  const start = ref(new Date())
  const end = ref(
    new Date(start.value.setSeconds(start.value.getSeconds() + props.time)),
  )
  const interval = ref()

  const timeFormatted = computed(() => {
    if (!_isTimeOver.value) {
      const _formated = formatedDuration(
        formatDuration(interval.value!, {
          delimiter: ', ',
          format: props.format,
        }),
      )
      $emit('update:timeFormated', _formated)
      return _formated
    }

    return 0
  })

  const setIntervalDuration = ({ start, end }: { start: Date; end: Date }) => {
    interval.value = intervalToDuration({
      start,
      end,
    })
  }

  setIntervalDuration({ start: start.value, end: end.value })

  const updateInterval = () => {
    setIntervalDuration({ start: new Date(), end: end.value })
  }

  const startTimer = () => {
    _isTimeOver.value = false
    updateIsTimeOver()
    if (!timerId.value && !_isTimeOver.value) {
      updateInterval()
      timerId.value = setInterval(() => {
        updateInterval()
        checkIsTimeOver()
      }, 1000)
    }
  }

  const stopInterval = () => {
    if (timerId.value) {
      clearInterval(timerId.value)
      timerId.value = null
    }

    timerStopId.value = setInterval(() => {
      stoppedTime.value++
    }, 1000)
  }

  const continueInterval = () => {
    start.value.setSeconds(start.value.getSeconds() + stoppedTime.value)
    end.value.setSeconds(end.value.getSeconds() + stoppedTime.value)

    stoppedTime.value = 0

    if (timerStopId.value) {
      clearInterval(timerStopId.value)
      timerStopId.value = null
    }

    startTimer()
  }

  const resetInterval = () => {
    start.value = new Date()
    end.value = new Date(
      start.value.setSeconds(start.value.getSeconds() + props.time),
    )

    setIntervalDuration({ start: start.value, end: end.value })
  }

  function restart() {
    resetInterval()
    startTimer()
  }

  function checkIsTimeOver(): void {
    const timeParametersValues = Object.values(interval.value!)

    _isTimeOver.value = timeParametersValues.every(
      (parameter) => parameter === 0,
    )

    if (_isTimeOver.value) {
      stopInterval()

      updateIsTimeOver()
    }
  }

  function updateIsTimeOver() {
    $emit('update:isTimeOver', _isTimeOver.value)
  }

  function formatedDuration(duration: any) {
    return duration
      .split(', ')
      .map((item) => {
        let [number, period] = item.split(' ')

        if (period) {
          if (period.match('дн|де')) period = 'дн'
          else if (period.match('час')) period = 'час'
          else if (period.match('мин')) period = 'мин'
          else if (period.match('сек')) period = 'сек'

          return `${number} ${period}`
        } else {
          return 0
        }
      })
      .join(', ')
  }

  window.addEventListener('beforeunload', function (event) {
    event.preventDefault()

    if (!_isTimeOver.value) {
      localStorage.setItem(
        `${props.name}TimerTimeLeft`,
        new Date(end.value).toUTCString(),
      )
    } else {
      this.localStorage.removeItem(`${props.name}TimerTimeLeft`)
    }
  })

  onMounted(() => {
    const timeLeft = localStorage.getItem(`${props.name}TimerTimeLeft`)
    if (timeLeft && new Date(timeLeft) > new Date()) {
      start.value = new Date()
      end.value = new Date(timeLeft)
      startTimer()
    }
  })

  defineExpose({
    stopInterval,
    continueInterval,
    resetInterval,
    restart,
  })
</script>
