// JS port of the Password class in lock.py / tester.py (same state machine).
// Typing 80771 arms the lock; the next digit decides: 1 unlocks, 4 locks,
// anything else resets. Any mismatch before that resets to the start state.

export const CODE = [8, 0, 7, 7, 1]

export function createLock(code = CODE) {
  return { code, index: 0, unlocked: false }
}

// Pure version for React state: returns the next state, never mutates.
export function checkDigit(state, digit) {
  const { code, index, unlocked } = state
  if (index === code.length) {
    const next = digit === 1 ? true : digit === 4 ? false : unlocked
    return { code, index: 0, unlocked: next }
  }
  if (code[index] === digit) return { code, index: index + 1, unlocked }
  return { code, index: 0, unlocked }
}

// Mirrors simulate_break() in tester.py: feed random digits into a locked
// lock until it unlocks, and return how many inputs that took.
export function simulateBreak(code = CODE, rand = Math.random) {
  const n = code.length
  let index = 0
  let count = 0
  for (;;) {
    const digit = Math.floor(rand() * 10)
    count++
    if (index === n) {
      if (digit === 1) return count
      index = 0
    } else if (code[index] === digit) {
      index++
    } else {
      index = 0
    }
  }
}
