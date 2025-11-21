"use client"
import { Menu, X } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const menuItems = [
    { label: "Bosh sahifa", href: "#home" },
    { label: "Jamoa haqida", href: "#team" },
    { label: "MSS haqida", href: "#about" },
    { label: "Maqsadi va yo'nalishi", href: "#goals" },
    { label: "Mablag'lar", href: "#budget" },
    { label: "Bozor tahlili", href: "#market" },
    { label: "Marketing rejasi", href: "#marketing" },
    { label: "Ishlab chiqarish jarayoni", href: "#process" },
    { label: "Mehnat taqsimoti", href: "#labor" },
    { label: "Moliyaviy hisob", href: "#finance" },
    { label: "Xulosa", href: "#conclusion" },
  ]

  const handleMenuClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border hover-glow"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-40 transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:translate-x-0 overflow-y-auto`}
      >
        {/* Logo */}
        <div className="p-6 md:p-8 sticky top-0 bg-card border-b border-border">
          <h1 className="text-2xl font-bold gradient-text animate-fade-in-up">MSS</h1>
          <p className="text-xs text-muted-foreground mt-1 font-medium tracking-widest">MINI SITE STUDIO</p>
        </div>

        {/* Navigation Menu */}
        <nav className="px-3 md:px-4 space-y-1 py-6">
          {menuItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleMenuClick}
              className="block px-4 py-2 md:py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors duration-200 border border-transparent hover:border-primary/30"
              style={{
                animation: isOpen ? `slideInFromLeft 0.3s ease-out ${index * 0.05}s forwards` : "none",
                opacity: isOpen ? 1 : 1,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

      
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
