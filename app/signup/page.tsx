import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-center">Create Account</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Username" className="w-full border p-2 rounded" />
                    <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                    <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                    <Button className="w-full">Sign Up</Button>
                </form>
                <p className="text-sm text-center mt-4">
                    Already have an account? <Link href="/signin" className="text-red-600 underline">Sign in</Link>
                </p>
            </div>
        </div>
    )
}