import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs';
import { ProModalProvider } from '@/providers/pro-modal-provider';
import { ToasterProvider } from '@/providers/toaster-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CreAIte | AI SaaS Platform',
  description: 'Create AI generated solutions, image, music, etc.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ProModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
