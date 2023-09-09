"use client"

import { ReactLenis, useLenis } from "@studio-freight/react-lenis"
import { useEffect } from 'react'

interface LenisProviderProps {
  children: React.ReactNode,
  options?: {
    wrapper?: Window | HTMLElement;
    content?: HTMLElement;
    wheelEventsTarget?: Window | HTMLElement;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    syncTouch?: boolean;
    syncTouchLerp?: number;
    __iosNoInertiaSyncTouchLerp?: any;
    touchInertiaMultiplier?: number;
    duration?: number;
    easing?: (t: number) => number;
    lerp?: number;
    infinite?: boolean;
    gestureOrientation?: "vertical" | "horizontal" | "both";
    orientation?: "vertical" | "horizontal";
    touchMultiplier?: number;
    wheelMultiplier?: number;
    normalizeWheel?: boolean;
    autoResize?: boolean;
  },
  props?: any
}

const LenisProvider = ({
  children, 
  options,
  ...props
} : LenisProviderProps) => {

  return (
    <ReactLenis options={options} {...props} root>
      {children}
    </ReactLenis>
  )
}

export default LenisProvider