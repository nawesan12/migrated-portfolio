"use client"
import Lenis from "@studio-freight/lenis"
import { useLayoutEffect } from "react"

export default function LenisController({ children }: { children: React.ReactNode }) {
  function raf(time: number) {
    const lenis: Lenis = new Lenis()

    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  useLayoutEffect(() => { 
    requestAnimationFrame(raf) 
    //eslint-disable-next-line
  }, []) 

  return (
    <>{children}</>
  )
}