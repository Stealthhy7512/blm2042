import { Button } from "@/components/ui/button"
import Link from "next/link"
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";

export default function SignUpPage() {
    const tags = ['Technology', 'Sports', 'Gaming', 'Music', 'Art', 'Photography', 'Animals', 'Learning'];
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-center">Create Account</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Username" className="w-full border p-2 rounded" />
                    <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                    <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                    Select your interests
                    {/*TODO: Force choose at least one.*/}
                    <ToggleGroup type='multiple' className='flex flex-wrap gap-3 mt-4'>
                        {tags.map(tag => (
                          <ToggleGroupItem
                            value={tag}
                            key={tag}
                            className='flex flex-auto text-lg text-muted-foreground rounded-full border px-2 basis-1/4 data-[state=on]:bg-[#383D45] data-[state=on]:text-white transition-colors'
                          >
                              {tag}
                          </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                    <Button className="w-full">Sign Up</Button>
                </form>
                <p className="text-sm text-center mt-4">
                    Already have an account? <Link href="/signin" className="text-red-600 underline">Sign in</Link>
                </p>
            </div>
        </div>
    )
}