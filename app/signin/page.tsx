import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Username" className="w-full border p-2 rounded" />
                    <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                    <Button className="w-full">Sign In</Button>
                </form>
                <p className="text-sm text-center mt-4">
                    Don’t have an account? <Link href="/signup" className="text-red-600 underline">Sign up</Link>
                </p>
            </div>
        </div>
    )
}