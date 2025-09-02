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
                    {copiedItem === 'email' ? 'Copied to clipboard!' : email}
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
                    {copiedItem === 'phone' ? 'Copied to clipboard!' : phone}
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

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Navigation Menu (moved OUTSIDE the header) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0f0f0f]/95 backdrop-blur-lg shadow-xl border-t border-emerald-500/20 p-6 flex flex-col space-y-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-semibold ${isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-300'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}

          {/* Contact section */}
          <div className="pt-4 border-t border-emerald-500/30">
            <p className="text-gray-400 text-sm mb-2">Contact</p>
            <div className="space-y-2">
              <button
                onClick={() => copyToClipboard(email, 'email')}
                className="w-full text-left text-gray-300 hover:text-emerald-300"
              >
                {copiedItem === 'email' ? 'Copied!' : email}
              </button>
              <button
                onClick={() => copyToClipboard(phone, 'phone')}
                className="w-full text-left text-gray-300 hover:text-emerald-300"
              >
                {copiedItem === 'phone' ? 'Copied!' : phone}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}