"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function StudentHubAuth() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        const { email, password, confirmPassword } = formData;

        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        if (!isLogin) {
            if (!confirmPassword) {
                setError("Please confirm your password.");
                return;
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }
        }

        console.log("Form submitted:", formData);
        router.push("/home");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-600 p-12 flex flex-col justify-center">
                    <div className="flex flex-col justify-center items-center text-center gap-4 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 p-1 bg-white rounded-lg flex items-center justify-center">
                                <img src="/images/only-logo.png" alt="Logo" width={32} />
                            </div>
                            <span className="text-white font-semibold text-lg">Student Hub</span>
                        </div>

                        <p className="text-white text-lg">Connect. Learn. Grow</p>
                    </div>

                    <div className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />

                        {!isLogin && (
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        )}


                        {error && (
                            <div className="bg-transparent text-red-500 px-4 py-2 mb-4 text-center">
                                {error}
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            className="w-full py-4 rounded-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold transition-colors duration-200 shadow-lg"
                        >
                            {isLogin ? "Login" : "Register"}
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-white hover:text-blue-100 transition-colors"
                        >
                            {isLogin
                                ? "Don't have an account? Register"
                                : "Already have an account? Login"}
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-blue-50 p-12 flex flex-col justify-center items-center relative">
                    <div className="mb-8 flex flex-col justify-center items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <img src="/images/only-logo.png" alt="Logo" width={60} />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-black font-black text-4xl">Student Hub</span>
                        </div>
                    </div>
                    <div className="text-center mb-12 mt-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Empowering Education in the Social Media Era
                        </h2>
                    </div>
                    <div className="relative w-full max-w-md">
                        <img src="/images/sign-up.png" alt="Logo" width={1000} />
                    </div>
                </div>
            </div>
        </div>
    );
}
