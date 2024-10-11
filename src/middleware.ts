import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUser } from './services/AuthService';
import path from 'path';


const AuthRoutes = ["/login", "/register"];

const ROLES = {
    ADMIN: "admin",
    USER: "user"
};

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    console.log(pathname);

    const user = await getCurrentUser();

    console.log({
        user,
        pathname
    }, "");


    if (!user) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL(pathname ? `/login?redirect=${pathname}` : "/login", request.url))
        }
    }


    if (user?.role === "admin" && pathname.match(/^\/admin-dashboard/)) {
        return NextResponse.next();
    }


    if (user?.role === "user" && pathname.match(/^\/dashboard/)) {
        return NextResponse.next();
    }


    if (user?.role === "user" && pathname === "/profile") {
        return NextResponse.next();
    }

    if (user?.role === "admin" && pathname === "/profile") {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/dashboard/:page*",
        "/admin-dashboard/:page*",
        "/login",
        "/register",
        "/profile"
    ],
}