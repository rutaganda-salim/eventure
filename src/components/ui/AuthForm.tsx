import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { handleGoogleSignUp } from "@/actions/googlesignup";

export function AuthForm() {
  const signUp = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createServerActionClient({
      cookies,
    });

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `http://localhost:3000/auth/callback`,
      },
    });
  };

  return (
    <div className="w-full max-w-md space-y-6 p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          Event<span className="text-[#7C3AED]">ure</span>
        </h2>
        <h3 className="mt-6 text-2xl font-bold">Sign Up to Eventure</h3>
      </div>
      <form action={signUp} className="space-y-6 flex flex-col items-center">
        <div className="space-y-3 w-[500px]"></div>
        <div className="space-y-3 w-[500px]">
          <label className="block text-base font-medium">EMAIL</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-[500px] rounded-md border placeholder:text-[#687C94] focus:ring-none focus:border-none bg-white border-gray-200 px-4 py-6"
          />
        </div>
        <div className="space-y-3 w-[500px]">
          <label className="block text-base font-medium">PASSWORD</label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-[500px] rounded-md border placeholder:text-[#687C94] focus:ring-none focus:border-none bg-white border-gray-200 px-4 py-6"
          />
        </div>
        <div className="flex justify-center w-full">
          <Button
            type="submit"
            className="w-[250px] mx-auto flex text-center justify-center text-base items-center rounded-md bg-[#7C3AED] py-5 text-white hover:bg-[#6D28D9]"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-center text-sm text-gray-500">Or</div>
      <Button
        variant="outline"
        onClick={handleGoogleSignUp}
        className="w-[340px] mx-auto flex items-center justify-center gap-2 rounded-md text-base border py-5"
      >
        <Image src="/google.svg" alt="Google" width={20} height={20} />
        Sign up with Google
      </Button>
    </div>
  );
}
