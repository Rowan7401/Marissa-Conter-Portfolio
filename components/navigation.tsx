'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Copy, Home } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const email = 'marissaconter@gmail.com'
  const phone = '+1 (949) 529-4277'

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(type)
      setTimeout(() => setCopiedItem(null), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
          <Home className="h-7 w-7" />
            Marissa Conter
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-all duration-200 hover:text-primary ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary pb-1' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Contact Dropdown */}
            <div className="relative mr-8">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className={`text-lg font-medium transition-all ${
                  contactOpen 
                    ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Contact
              </button>
              <div
                className={`absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 p-4 space-y-3 z-50
                  transition-all duration-300 transform origin-top ${
                    contactOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
              >
                  {/* Email */}
                  <div className="flex justify-between items-center">
                    <span className="text-md font-bold text-gray-700">
                      {copiedItem === 'email' ? 'Copied to clipboard!' : email}
                    </span>
                    <button
                      onClick={() => copyToClipboard(email, 'email')}
                      className="p-2 rounded hover:bg-gray-100"
                      title="Copy Email"
                    >
                      <Copy className="h-6 w-6 text-gray-600" />
                    </button>
                  </div>

                  <hr className="border-[0.1rem] border-blue-500" />

                  {/* Phone */}
                  <div className="flex justify-between items-center">
                    <span className="text-md font-bold text-gray-700">
                      {copiedItem === 'phone' ? 'Copied to clipboard!' : phone}
                    </span>
                    <button
                      onClick={() => copyToClipboard(phone, 'phone')}
                      className="p-2 rounded hover:bg-gray-100"
                      title="Copy Phone"
                    >
                      <Copy className="h-6 w-6 text-gray-600" />
                    </button>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
