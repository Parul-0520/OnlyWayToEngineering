// /app/auth/sign-up/page.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/dashboard"); // already signed-in, go to dashboard
    }
  }, [isSignedIn, router]);

  if (isSignedIn) return null; // prevent flicker

  return <SignUp redirectUrl="/dashboard" />;
}
