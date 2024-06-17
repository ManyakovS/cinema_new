export function removeNesting(obj) {
  if (obj !== null && (typeof obj === 'object' || Array.isArray(obj))) {
    const keys = Object.keys(obj)
    if (keys.length === 1 && !Array.isArray(obj)) {
      return removeNesting(obj[keys[0]])
    }
    keys.forEach((key) => {
      obj[key] = removeNesting(obj[key])
    })
  }
  return obj
}
