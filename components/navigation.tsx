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
  console.log('Mobile menu state:', mobileMenuOpen);

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(type)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0f0f0f]/95 via-[#1a1a1a]/95 to-[#0f0f0f]/95
       backdrop-blur-md border-b-4 border-transparent"
      style={{
        borderImage:
          'linear-gradient(to right, transparent, #10b981 30%, #10b981 70%, transparent) 1',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
          >
            <Home className="h-7 w-7 text-emerald-400" />
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
                  className={`text-lg font-semibold transition-all duration-200 ${isActive
                      ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1'
                      : 'text-gray-300 hover:text-emerald-300'
                    }`}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className={`text-lg font-semibold transition-all ${contactOpen
                    ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1'
                    : 'text-gray-300 hover:text-emerald-300'
                  }`}
              >
                Contact
              </button>
              <div
                className={`absolute right-0 mt-3 w-80 bg-[#162133] text-white shadow-xl rounded-xl border border-emerald-500/30 p-4 space-y-3 z-50
                  transition-all duration-300 transform origin-top ${contactOpen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-md font-medium">
                    {copiedItem === 'email' ? 'Copied!' : email}
                  </span>
                  <button
                    onClick={() => copyToClipboard(email, 'email')}
                    className="p-2 rounded hover:bg-emerald-500/10"
                  >
                    <Copy className="h-6 w-6 text-emerald-400" />
                  </button>
                </div>

                <hr className="border-emerald-500/50" />

                <div className="flex justify-between items-center">
                  <span className="text-md font-medium">
                    {copiedItem === 'phone' ? 'Copied!' : phone}
                  </span>
                  <button
                    onClick={() => copyToClipboard(phone, 'phone')}
                    className="p-2 rounded hover:bg-emerald-500/10"
                  >
                    <Copy className="h-6 w-6 text-emerald-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-gray-300 hover:text-emerald-300"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8 text-white text-2xl
  transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-300 hover:text-emerald-400"
        >
          <X className="h-10 w-10" />
        </button>

        {/* Nav Links */}
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-semibold transition-all ${isActive ? 'text-emerald-400' : 'hover:text-emerald-300'
                }`}
            >
              {item.name}
            </Link>
          )
        })}

        {/* Contact Section */}
        <div className="mt-6 text-center space-y-4">
          <div
            className="text-lg cursor-pointer"
            onClick={() => copyToClipboard(email, 'email')}
          >
            {copiedItem === 'email' ? 'Copied!' : email}
          </div>
          <div
            className="text-lg cursor-pointer"
            onClick={() => copyToClipboard(phone, 'phone')}
          >
            {copiedItem === 'phone' ? 'Copied!' : phone}
          </div>
        </div>
      </div>

    </nav>
  )
}
