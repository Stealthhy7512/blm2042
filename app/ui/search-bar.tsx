'use client'

import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState<string[]>([])
    const [showSearchResults, setShowSearchResults] = useState(false)


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value
        setSearchTerm(term)

        // TODO: Fetch users from the server
        const denemeKullanici = ["kaanyazici", "goksel1andonly", "omerakb"]

        if (term.length > 0) {
            const filtered = denemeKullanici.filter((username) =>
            username.toLowerCase().includes(term.toLowerCase()))
            setSearchResults(filtered)
            setShowSearchResults(true)
        } else {
            setSearchResults([])
            setShowSearchResults(false)
        }
    }
    return (
        <div className="flex-1 flex justify-center mx-2">
            <div className="relative w-full max-w-md">
                <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-3 py-2">
                    <Search className="w-4 h-4 text-gray-500 mr-2" />
                    <input
                    type="text"
                    placeholder="Ara..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full bg-transparent focus:text-black text-gray-600 focus:outline-none text-sm"
                    />
                </div>

                {showSearchResults && (
                    <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow z-50">
                        {searchResults.length > 0 ? (
                        searchResults.map((username) => (
                            <Link
                                // TODO: Get profile image
                                key={username}
                                href={`/${username}`}
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"

                                onClick={() => {
                                setSearchTerm("")
                                setShowSearchResults(false)
                                }}
                                >
                                {username}
                            </Link>
                            ))
                            ) : (
                                <div className="px-4 py-2 text-sm text-gray-500">No users found</div>
                            )}
                    </div>
                )}
            </div>
        </div>
    )
}
