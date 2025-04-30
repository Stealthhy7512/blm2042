"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { tags } from "@/app/lib/definitions";
import {toast }from "sonner";
export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !name || !email || !password) {
      toast.error("Please fill in all the fields.");
      return;
    }

    if (interests.length === 0) {
      toast.error("Please select at least one interest.");
      return;
    }
    toast.success("Sign up is succesfully completed.")
    // Kayıt işlemleri burada yapılır (örneğin: API çağrısı)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-3">
      <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-8 text-center">Create Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
          />

          {/* Interest Section */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-700 mb-4">What are you interested in?</p>
            <ToggleGroup
              type="multiple"
              className="flex flex-wrap gap-4"
              value={interests}
              onValueChange={setInterests}
            >
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

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <Button type="submit" className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Sign Up
          </Button>
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
