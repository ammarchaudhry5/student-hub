"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../api/context/auth/auth.context";
import { registerUser, loginUser } from "../api/services/auth/auth.service";

export default function StudentHubAuth() {
    const router = useRouter();
    const { setToken } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        name: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null);
    };

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async () => {
        console.log("Submit button pressed");
        console.log("Form data:", formData);

        const { email, password, confirmPassword, username, name } = formData;

        if (!email || !password || (!isLogin && (!username || !name))) {
            setError("All required fields must be filled.");
            console.log("Validation failed");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            console.log("Invalid email");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            console.log("Password too short");
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setError("Passwords do not match.");
            console.log("Passwords mismatch");
            return;
        }

        setLoading(true);
        try {
            const endpointData = isLogin
                ? { email, password }
                : { email, password, username, name };

            console.log("Sending request to API:", endpointData);

            const response = isLogin
                ? await loginUser(endpointData)
                : await registerUser(endpointData);

            console.log("API response:", response);

            if (!response.success) {
                setError(response.message || "Something went wrong");
            } else {
                if (isLogin && response.token) {
                    localStorage.setItem("token", response.token);
                    setToken(response.token);
                }
                router.push("/home");
            }
        } catch (err: unknown) {
            console.error(err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Network error");
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Form */}
                <div className="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center">
                    <div className="flex flex-col justify-center items-center text-center gap-4 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 p-1 bg-white rounded-lg flex items-center justify-center">
                                <img src="/images/only-logo.png" alt="Logo" width={32} />
                            </div>
                            <span className="text-gray-800 font-semibold text-lg">Student Hub</span>
                        </div>
                        <p className="text-gray-600 text-lg">Connect. Learn. Grow</p>
                    </div>

                    <div className="space-y-4">
                        {!isLogin && (
                            <>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 border-2 border-blue-300"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 border-2 border-blue-300"
                                />
                            </>
                        )}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-full bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 border-2 border-blue-300"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-full bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 border-2 border-blue-300"
                        />

                        {!isLogin && (
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-full bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 border-2 border-blue-300"
                            />
                        )}

                        {error && (
                            <div className="bg-transparent text-red-500 px-4 py-2 mb-4 text-center">
                                {error}
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full py-4 rounded-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold transition-colors duration-200 shadow-lg"
                        >
                            {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-indigo-700 hover:text-indigo-900 transition-colors"
                        >
                            {isLogin
                                ? "Don't have an account? Register"
                                : "Already have an account? Login"}
                        </button>
                    </div>
                </div>

                {/* Right Info */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 p-12 flex flex-col justify-center items-center relative">
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
                        <img src="/images/sign-up.png" alt="Illustration" width={1000} />
                    </div>
                </div>
            </div>
        </div>
    );
}
