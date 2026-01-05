const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const PROFILE_BASE = `${API_URL}/profile`;

export const getMyProfile = async (token: string) => {
    try {
        const res = await fetch(`${PROFILE_BASE}/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({
                success: false,
                message: `Server error: ${res.status} ${res.statusText}`,
            }));
            return errorData;
        }

        return await res.json();
    } catch (error) {
        console.error("Get profile error:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to fetch profile",
        };
    }
};

export const getProfileByUsername = async (username: string) => {
    if (!username || username === "undefined" || username === "[username]") {
        return {
            success: false,
            message: "Invalid username",
        };
    }

    try {
        const res = await fetch(`${PROFILE_BASE}/${encodeURIComponent(username)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({
                success: false,
                message: `Server error: ${res.status} ${res.statusText}`,
            }));
            return errorData;
        }

        return await res.json();
    } catch (error) {
        console.error("Public profile error:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Network error",
        };
    }
};


export const updateProfile = async (
    token: string,
    data: {
        name?: string;
        bio?: string;
        profilePicture?: string;
        links?: string[];
    }
) => {
    try {
        const res = await fetch(`${PROFILE_BASE}/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({
                success: false,
                message: `Server error: ${res.status} ${res.statusText}`,
            }));
            return errorData;
        }

        return await res.json();
    } catch (error) {
        console.error("Update profile error:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to update profile",
        };
    }
};
