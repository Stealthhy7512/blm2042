import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";  // ToggleGroup'ı import ettik

export default function SignUpPage() {
  const tags = ['Technology', 'Sports', 'Gaming', 'Music', 'Art', 'Photography', 'Animals', 'Learning'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-3">
      <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-8 text-center">Create Account</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
          />
          
          {/* Interest Section */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-700 mb-4">Select your interests</p>
            <ToggleGroup type="multiple" className="flex flex-wrap gap-4">
              {tags.map(tag => (
                <ToggleGroupItem
                  key={tag}
                  value={tag}
                  className="flex items-center justify-center px-10 py-4 text-sm text-gray-700 rounded-full border border-gray-300 transition-all hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
                >
                  {tag}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <Button className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors">Sign Up</Button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 underline hover:text-blue-800">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
