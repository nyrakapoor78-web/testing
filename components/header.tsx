"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`border-b ${isScrolled ? "border-gray-200" : "border-white/20"} ${isScrolled ? "hidden" : "block"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+918011908914"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+91 8011908914</span>
              </a>
              <a
                href="mailto:ippbpt@gmail.com"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden md:inline">ippbpt@gmail.com</span>
              </a>
            </div>
            <div className="text-white text-xs sm:text-sm">Dr. B.K. Road, Barpeta Town, Assam</div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${isScrolled ? "text-gray-900" : "text-white"}`}>
                AI Enterprise ASM
              </span>
              <span className={`text-xs ${isScrolled ? "text-gray-600" : "text-blue-200"}`}>
                Professional Printing Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isScrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <a href="tel:+919101426903">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button asChild size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-4">
              <a href="tel:+919101426903">Get Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
