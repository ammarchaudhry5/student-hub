interface RegisterInput {
    email: string;
    password: string;
    username: string;
    name: string;
    profilePicture?: string;
    bio?: string;
    links?: string[];
}
export declare class AuthServices {
    register(data: RegisterInput): Promise<{
        id: number;
        email: string;
        username: string;
        name: string;
        profilePicture: string | undefined;
        bio: string | undefined;
        links: string[] | undefined;
    }>;
    login(email: string, password: string): Promise<{
        token: string;
        user: {
            id: number;
            email: string;
            username: string;
            name: string;
            profilePicture: string | undefined;
            bio: string | undefined;
            links: string[] | undefined;
        };
    }>;
}
export {};
