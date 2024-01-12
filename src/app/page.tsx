'use client';

import { AuthForm } from "@/features/authForm-slice/authForm";

export default function Home({ children }: { children: React.ReactNode }) {
    return <><AuthForm/></>;
}
