'use client'
import { useLenis } from '@studio-freight/react-lenis'
import { useRef } from 'react'

/**
 *
 * @param label
 * @param idRef
 * @returns
 */

interface LinkProps {
  label: string
  target: string
}

export const Link = ({ label, target }: LinkProps) => {
  const lenis = useLenis()

  const handleScrollTo = (e: any) => {
    e.preventDefault()
    lenis.scrollTo(target)
  }

  return (
    <>
      <a href="/" onClick={handleScrollTo}>
        {' '}
        {label}{' '}
      </a>
    </>
  )
}