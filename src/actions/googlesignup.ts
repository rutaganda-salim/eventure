"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const supabase = createClientComponentClient();

export  const handleGoogleSignUp = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${window.location.origin}/admin/dashboard`,
      },
    });

    if (error) throw error;
  } catch (error) {
    console.error("Error:", error);
  }
};