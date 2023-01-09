import Head from 'next/head'
import { Homenaje, Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React, { useEffect,useState } from 'react'
import {Button, Image} from "@chakra-ui/react"
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home({profile}) {
  console.log(profile)
  return (
    <>
     <div style={{width:"80%",textAlign:"center",marginLeft:"30px",margin:"auto"}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",marginTop:"20px",padding:"10px",paddingBottom:"20px"}}>
     <Image src={profile.avatar_url} width="160px" borderRadius={"50%"}/>
     <h3>Piyush khurana</h3>
     <h4>{profile.login}</h4>
     <h4>Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS | Deno | ReactJS | HTML | CSS | Chakra-UI | MUI</h4>
    <Link href="https://drive.google.com/file/d/1vqWuq5cA26_WRNHWpiq4sFmVZNfMgVBA/view?usp=share_link"><Button style={{padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",borderRadius:"20px",marginLeft:"10px",padding:"10px",marginTop:"20px"}}>Resume</Button></Link>
    <Link href={profile.html_url}><Button style={{padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",borderRadius:"20px",marginLeft:"10px",padding:"10px",marginTop:"20px"}}>Follow</Button></Link>
    </div>
      <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",marginTop:"20px",padding:"10px",paddingBottom:"20px"}}>
       <Button style={{border:"none",padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",border:"1px solid",fontSize:"20px",fontWeight:"bold",padding:"10px",marginTop:"20px"}}>TypeScript</Button>
       <Button style={{border:"none",padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",border:"1px solid",fontSize:"20px",fontWeight:"bold",padding:"10px",marginTop:"20px"}}>React.js</Button>
       <Button style={{border:"none",padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",border:"1px solid",fontSize:"20px",fontWeight:"bold",padding:"10px",marginTop:"20px"}}>NodeJS</Button>
       <Button style={{border:"none",padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",border:"1px solid",fontSize:"20px",fontWeight:"bold",padding:"10px",marginTop:"20px"}}>TypeScript</Button>
       <Button style={{border:"none",padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",border:"1px solid",fontSize:"20px",fontWeight:"bold",padding:"10px",marginTop:"20px"}}>JavaScript</Button>
       <Button style={{border:"none",padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",border:"1px solid",fontSize:"20px",fontWeight:"bold",padding:"10px",marginTop:"20px"}}>HTML</Button>
       <Button style={{border:"none",padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",border:"1px solid",fontSize:"20px",fontWeight:"bold",padding:"10px",marginTop:"20px"}}>CSS</Button>
       <Button style={{border:"none",padding:"20px 70p 20px 70px",borderRadius:"10px",marginLeft:"10px",border:"1px solid",fontSize:"20px",fontWeight:"bold",padding:"10px",marginTop:"20px"}}>Chakra-UI</Button>
      </div>
      <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",marginTop:"20px",textAlign:"start",padding:"10px",paddingBottom:"40px"}}>
        <h3 style={{marginTop:"10px"}}>
       1    Masai School
Full-Stack Development (Full Time)
July 2022 – present | Bengaluru, India
        </h3>
        <h3 style={{marginTop:"10px"}}>
       2   ITI-Mechanic-Motor-Vehicle  From ITI Nandnagri
Diploma
Aug 2019 – July 2021 | Delhi , India
        </h3>
     {/* <h3 style={{marginTop:"10px"}}>
     Tata Motor's - 1 month as a Technician
Intership
Hero MotoCorp - 3 month as a Technician
TVS Motor - 1 month as Customer Support
     </h3> */}
 <h3 style={{marginTop:"10px"}}>
 3  Bhurav Devras Saraswati Vidya Mandir
Higher Secondary Education
April 2016 – April 2018 | Noida,Uttar pradesh, India
</h3>


      </div>
        </div>
      <div>

      </div>
    </>
  )
}
export const getStaticProps=async()=>{
  let res=await fetch(`https://api.github.com/users/piyushkhurana8744`)
  let data=await res.json()
  return{
      props:{
        profile:data
      }
  }
}