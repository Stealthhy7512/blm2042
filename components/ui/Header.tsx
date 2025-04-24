'use client'

import Link from "next/link"
import { UserCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

import BlockButton from "@/app/ui/block-button";

// TODO: if logged in show user info
export default function Header({ isAuthenticated }: {isAuthenticated: boolean}) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-sm sticky top-0 z-50">
            <Link href="/" className="flex items-center space-x-2">
                <Star /><h1 className="text-xl font-bold text-blue-600">YildizNet</h1>
            </Link>

            <nav className="flex items-center space-x-4">
                {/* TODO: Add search bar*/}
                {/* If logged in show user info */}
                {isAuthenticated ? (
                    <Link href="/profile">
                        <UserCircle className="w-8 h-8 text-gray-600" />
                    </Link>
                ) : (
                    <>
                        <Link href="/signin">
                            <Button variant="outline">Sign In</Button>
                        </Link>
                        <Link href="/signup">
                            <Button>Sign Up</Button>
                        </Link>
                    </>
                )}
            </nav>
        </header>
    )
}