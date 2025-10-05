import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'
import AosInit from './components/AosInit'
import ErrorSuppressor from './components/ErrorSuppressor'

export default function RootLayout({ children }) {
  return (
    <div>
      <AosInit />
      <ErrorSuppressor />
      {children}
    </div>
  )
}
