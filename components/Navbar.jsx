import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"cyan",padding:"10px"}}>
      <Link href="/"><h1>HomePage</h1></Link>
      <Link href="https://piyushkhurana8744.github.io/evaluation/Project"><h1>Project</h1></Link>
    </div>
  )
}

export default Navbar
