<template>
  <teleport to="body">
    <div class="toast active">
      <div class="toast-content">
        <i class="fas fa-solid fa-check check"></i>

        <div class="message">
          <span class="text text-1">Success</span>
          <span class="text text-2">{{ message }}</span>
        </div>
      </div>
      <span class="cross-stand-alone close" />

      <!-- Remove 'active' class, this is just to show in Codepen thumbnail -->
      <div class="progress active"></div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  interface Props {
    timeout: number
    type: 'negative'
    title: string
    message: string
    position: string
    html: boolean
    close: () => void
  }

  const props = defineProps<Props>()

  let timer1, timer2

  onMounted(() => {
    const toast = document.querySelector('.toast')
    const closeIcon = document.querySelector('.close')
    const progress = document.querySelector('.progress')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    progress.style.setProperty(
      '--progress-active-duration',
      `${props.timeout}ms`,
    )

    toast.classList.add('active')
    progress.classList.add('active')

    timer1 = setTimeout(() => {
      toast.classList.remove('active')
    }, props.timeout) //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove('active')
    }, props.timeout + 50)

    closeIcon.addEventListener('click', () => {
      toast.classList.remove('active')

      setTimeout(() => {
        progress.classList.remove('active')
      }, props.timeout)

      clearTimeout(timer1)
      clearTimeout(timer2)

      props.close()
    })
  })
</script>

<style scoped lang="scss">
  @mixin cross($size: 20px, $color: currentColor, $thickness: 1px) {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    position: relative;
    width: $size;
    height: $size;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: ($size - $thickness) / 2;
      left: 0;
      right: 0;
      height: $thickness;
      background: $color;
      border-radius: $thickness;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    span {
      display: block;
    }
  }

  .toast {
    z-index: 100000;
    position: absolute;
    top: 15px;
    right: 10px;
    border-radius: 6px;
    background: #fff;
    padding: 10px 17px 10px 12px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transform: translateX(calc(100% + 30px));
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
  }

  .toast.active {
    transform: translateX(0%);
  }

  .toast .toast-content {
    display: flex;
    align-items: center;
  }

  .toast-content .check {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    min-width: 35px;
    background-color: #4070f4;
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
  }

  .toast-content .message {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }

  .message .text {
    font-size: 16px;
    font-weight: 400;
    color: #666666;
  }

  .message .text.text-1 {
    font-weight: 600;
    color: #333;
  }

  .toast .close {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px;
    cursor: pointer;
    opacity: 0.7;
  }

  .toast .close:hover {
    opacity: 1;
  }

  .toast .progress {
    --progress-active-duration: 3000ms;

    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
  }

  .toast .progress:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #4070f4;
  }

  .progress.active:before {
    animation: progress var(--progress-active-duration) linear forwards;
  }

  @keyframes progress {
    100% {
      right: 100%;
    }
  }

  button {
    padding: 12px 20px;
    font-size: 20px;
    outline: none;
    border: none;
    background-color: #4070f4;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #0e4bf1;
  }

  .toast.active ~ button {
    pointer-events: none;
  }

  .cross-stand-alone {
    @include cross(15px, #000, 2px);
  }
</style>
