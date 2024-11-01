"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export const logIn = async (formData: FormData) => {
    "use server"

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const supabase = createServerActionClient({
      cookies
    })

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
        throw new Error(error.message);
      }
      redirect("/admin/dashboard");
}