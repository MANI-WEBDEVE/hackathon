'use client';
import Hero from "@/components/Hero";
import {useEffect} from 'react'

export default function Home() {

  useEffect(() => {
    document.addEventListener("copy", (e:any) => {
      const selectData = window.getSelection()?.toString();
        e.clipboardData.setData(
          "text/plain",
          "Fuck Off " 
        );
        e.preventDefault();
    })
  }, [])
  

  return (
  <>
  <Hero/></>
  );
}
