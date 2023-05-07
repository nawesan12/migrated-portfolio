"use client"
import Lenis from "@studio-freight/lenis"
import { useLayoutEffect } from "react"

export default function LenisController({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => { 
    const lenis: Lenis = new Lenis()

    function raf(time: number) {  
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf) 
    //eslint-disable-next-line
  }, []) 

  return (
    <>{children}</>
  )
}