
import React from 'react'
import AppRouter from './Router/AppRouter'
import { UIProvider } from './Context/AppContext'

export default function App() {
  return (
    <UIProvider>
     <AppRouter />
    </UIProvider>
  )
}
