const API_URL = "http://localhost:4000";

export const registerUser = async (data: {
    email: string;
    password: string;
    username?: string;
    name?: string;
}) => {
    try {
        const res = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({ 
                success: false, 
                message: `Server error: ${res.status} ${res.statusText}` 
            }));
            return errorData;
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
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({ 
                success: false, 
                message: `Server error: ${res.status} ${res.statusText}` 
            }));
            return errorData;
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
