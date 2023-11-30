import { RefObject, useEffect } from 'react'

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
): void {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler()
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}