"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, ClipboardList, CreditCard, FileText, Home, Settings, Users, Activity, Pill } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Patients", href: "/patients", icon: Users },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Doctors", href: "/doctors", icon: ClipboardList },
  { name: "Medical Records", href: "/records", icon: FileText },
  { name: "Pharmacy", href: "/pharmacy", icon: Pill },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Reports", href: "/reports", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Activity className="h-6 w-6 text-primary" />
          <span>MediCare HMS</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", isActive ? "bg-secondary" : "hover:bg-muted")}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
