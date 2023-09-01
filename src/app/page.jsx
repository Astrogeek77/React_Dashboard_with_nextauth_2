'use client'

import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/options'
import SignoutButton from '@/components/signoutButton'
import HomeHere from '@/components/homeHere'

import React, { useState } from 'react'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Activity from '../components/Activity'
import Charts from '../components/Charts'

export default function Home() {
  const [showSidebar, setShowSidebar] = React.useState(false)

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev)
  }
  return (
    <main className="flex min-h-screen relative w-full text-black p-2 md:p-8 bg-[#F5F5F5] gap-0 ">
      {showSidebar && <Sidebar />}
      <div className="bg-[#F5F5F5] col-span-7 flex flex-col flex-auto p-4 justify-center items-center gap-2">
        <Header toggleSidebar={toggleSidebar}/>
        <Cards />
        <hr />
        <Activity />
        <hr />
        <Charts />
      </div>
    </main>
  )
}
