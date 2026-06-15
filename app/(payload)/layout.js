import { importMap } from './admin/importMap.js'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

export default function Layout({ children }) {
  return (
    <RootLayout importMap={importMap}>
      {children}
    </RootLayout>
  )
}
