"use client"

import { useState } from "react"
import { MenuIcon, UserCircle, UserCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function AccountButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("Failed to sign out:", error)
      // You could add toast notification here
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        className="flex items-center space-x-2 rounded-full"
      >
        <MenuIcon className="h-4 w-4" />
        <UserCircleIcon className="h-6 w-6" />
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-48" 
        align="end"
        sideOffset={8}
      >
        <DropdownMenuItem asChild>
          <Link 
            href="/dashboard"
            className="flex w-full cursor-pointer items-center"
          >
            Go to Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-red-600 focus:text-red-600 focus:bg-red-50"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}