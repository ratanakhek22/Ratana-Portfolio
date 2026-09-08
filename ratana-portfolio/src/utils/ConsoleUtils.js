export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function typeCommand(text, path, setLines) {
  return new Promise((resolve) => {
    let i = 0
    setLines((prev) => [...prev, { type: 'command', text: '', path }])

    const interval = setInterval(() => {
      i++
      setLines((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = { type: 'command', text: text.slice(0, i), path }
        return updated
      })

      if (i >= text.length) {
        clearInterval(interval)
        resolve()
      }
    }, 25)
  })
}