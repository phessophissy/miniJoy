import { useEffect, useState } from 'react'

export function usePersistentState(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      if (!raw) return defaultValue
      return JSON.parse(raw)
    } catch {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
