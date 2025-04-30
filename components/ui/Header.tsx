'use client'

import Link from "next/link"
import { UserCircle, Star, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header({ isAuthenticated }: { isAuthenticated: boolean }) {
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
                        {/* Community Button */}
                        <Link href="/community">
                            <Users className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-all duration-300" /> 
                        </Link>
                        {/* Profile Icon */}
                        <Link href="/profile">
                            <UserCircle className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-all duration-300" />
                        </Link>
                        {/* Settings Button */}
                        <Link href="/settings">
                            <Settings className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-all duration-300" />
                        </Link>
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
