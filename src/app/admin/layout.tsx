import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/layout.css'
import Layout from '../home/layout';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Projeto Pokemon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}