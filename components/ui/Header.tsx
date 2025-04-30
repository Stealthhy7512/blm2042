'use client'

import Link from "next/link"
import { UserCircle, Star, Settings, Users, LogOut, User, PlusCircle, SwitchCamera } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Header({ isAuthenticated }: { isAuthenticated: boolean }) {

    ///        Dropdown Menu        ///
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setDropdownOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [])
    ///////////////////////////////////////

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
            <Link href="/" className="flex items-center space-x-2">
                <Star className="text-blue-600 w-6 h-6" />
                <h1 className="text-xl font-bold text-blue-700 hidden sm:block">YildizNet</h1>
            </Link>

            <nav className="flex items-center space-x-6">
                {/* TODO: Add search bar */}
                {isAuthenticated ? (
                    <div className="flex items-center space-x-4">
                        {/*<Link href="/community">
                      <Users className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-all duration-300" />
                    </Link>*/}
        
                    {/* Dropdown Trigger */}
                    <div className="relative" ref={dropdownRef}>
                      <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <UserCircle className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-all duration-300" />
                      </button>
        
                      {/* Dropdown Menu */}
                      {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
                            {/* TODO: Root to user profile */}
                            <Link href="/{username}" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                                <User className="w-4 h-4 mr-2" />View Profile</Link>

                            <Link href="/add-post" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                                <PlusCircle className="w-4 h-4 mr-2" />Add Post</Link>

                            <Link href="/settings" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                                <Settings className="w-4 h-4 mr-2" />Settings</Link>

                            {/* TODO: Root to create community */}
                            <Link href="/create-community" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                                <Users className="w-4 h-4 mr-2" />Create Community</Link>

                            {/* TODO: Might swap to community account or just logout and root to login */}
                            <button className="w-full px-4 py-2 hover:bg-gray-100 flex items-center">
                                <SwitchCamera className="w-4 h-4 mr-2" />Change Account</button>

                            {/* TODO: logout*/}
                            <button className="w-full px-4 py-2 hover:bg-red-100 text-red-600 flex items-center">
                                <LogOut className="w-4 h-4 mr-2" />Log Out</button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                    <>
                        <Link href="/signin">
                            <Button variant="outline" className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                                Sign Up
                            </Button>
                        </Link>
                    </>
                )}
            </nav>
        </header>
    )
}
