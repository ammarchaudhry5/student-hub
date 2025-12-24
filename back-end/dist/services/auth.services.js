import { UserEntity } from "../entities/user.entity.ts";
import { DI } from "../app.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export class AuthServices {
    // Register a new user
    async register(data) {
        const em = DI.orm.em.fork();
        const exists = await em.findOne(UserEntity, { email: data.email });
        if (exists)
            throw new Error("User already exists");
        const hashed = await bcrypt.hash(data.password, 10);
        const user = em.create(UserEntity, {
            email: data.email,
            password: hashed,
            username: data.username,
            name: data.name,
            profilePicture: data.profilePicture || null,
            bio: data.bio || null,
            links: data.links || null,
            isLoggedIn: false,
            token: "",
        });
        await em.persistAndFlush(user);
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            name: user.name,
            profilePicture: user.profilePicture,
            bio: user.bio,
            links: user.links,
        };
    }
    // Login existing user
    async login(email, password) {
        const em = DI.orm.em.fork();
        const user = await em.findOne(UserEntity, { email });
        if (!user)
            throw new Error("Invalid credentials");
        const match = await bcrypt.compare(password, user.password);
        if (!match)
            throw new Error("Invalid credentials");
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            console.error("JWT_SECRET is missing in .env");
            throw new Error("Server config error — missing JWT secret");
        }
        const payload = { id: user.id, email: user.email };
        const options = {
            expiresIn: process.env.JWT_EXPIRES_IN || "7d",
        };
        const token = jwt.sign(payload, jwtSecret, options);
        user.isLoggedIn = true;
        user.token = token;
        await em.persistAndFlush(user);
        return {
            token,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                name: user.name,
                profilePicture: user.profilePicture,
                bio: user.bio,
                links: user.links,
            },
        };
    }
}
