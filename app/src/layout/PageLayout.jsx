import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'

export const PageLayout = () => {
  return (
    <React.Fragment>
        <Header />
        <main className="flex-1">
            <Outlet />
        </main>
        <Footer />
    </React.Fragment>
  )
}
