import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export function SigninForm() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
            redirectTo: `http://localhost:3000/auth/callback`,
          },
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex w-full items-center justify-center lg:w-3/5">
      <div className="w-full max-w-md space-y-6 p-8">
        <div className="text-center">
          <h2 className="text-xl font-bold">
            Event<span className="text-[#7C3AED]">ure</span>
          </h2>
          <h3 className="mt-6 text-2xl font-bold">Sign In to Eventure</h3>
        </div>
        <form
          onSubmit={handleGoogleSignIn}
          className="space-y-6 items-center flex flex-col"
        >
          <div className="space-y-3 w-[500px]">
            <label className="block text-base font-medium">EMAIL</label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-md border placeholder:text-[#687C94] focus:ring-none focus:border-none bg-white border-gray-200 px-4 py-6"
              required
            />
          </div>
          <div className="space-y-3 w-[500px]">
            <label className="block text-base font-medium">PASSWORD</label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-md border placeholder:text-[#687C94] focus:border-none bg-white border-gray-200 px-4 py-6"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-[250px] mx-auto flex text-center justify-center text-base items-center rounded-md bg-[#7C3AED] py-5 text-white hover:bg-[#6D28D9]"
          >
            Sign In
          </Button>
        </form>
        <div className="text-center text-sm text-gray-500">Or</div>
        <Button
          variant="outline"
          onClick={handleGoogleSignIn}
          className="w-[340px] mx-auto flex items-center justify-center gap-2 rounded-md text-base border py-5"
        >
          <Image src="/google.svg" alt="Google" width={20} height={20} />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
