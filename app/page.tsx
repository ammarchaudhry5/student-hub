"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 flex flex-col justify-center items-center text-center p-6">
            <img src="/images/only-logo.png" alt="Logo" className="w-24 h-24 mb-6" />
            <h1 className="text-5xl font-bold text-indigo-700 mb-4">Welcome to Student Hub</h1>
            <p className="text-gray-700 text-lg mb-8 max-w-xl">
                Connect with classmates, explore educational resources, and grow your career — all in one place.
            </p>

            <button
                onClick={() => router.push("/auth")}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-800 text-white font-medium rounded-full shadow-md transition"
            >
                Get Started
            </button>
        </div>
    );
}