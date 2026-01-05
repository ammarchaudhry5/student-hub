const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
const AUTH_BASE = `${API_URL}/auth`;

export const registerUser = async (data: {
    email: string;
    password: string;
    username?: string;
    name?: string;
}) => {
    try {
        const res = await fetch(`${AUTH_BASE}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            return await res.json().catch(() => ({
                success: false,
                message: `Server error: ${res.status} ${res.statusText}`
            }));
        }

        return await res.json();
    } catch (error) {
        console.error("Register error:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Network error. Please check if the backend server is running.",
        };
    }
};

export const loginUser = async (data: { email: string; password: string }) => {
    try {
        const res = await fetch(`${AUTH_BASE}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            return await res.json().catch(() => ({
                success: false,
                message: `Server error: ${res.status} ${res.statusText}`
            }));
        }

        return await res.json();
    } catch (error) {
        console.error("Login error:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Network error. Please check if the backend server is running.",
        };
    }
};
