import Image from "next/image";
import { AuthForm } from "@/components/ui/AuthForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <div
        className="flex min-h-screen bg-[#F8F8FA]"
        style={{ fontFamily: "Product Sans, sans-serif", fontWeight: 400 }}
      >
        <div className="relative hidden w-2/5 lg:block">
          <div className="absolute inset-0">
            <Image
              src="/signup.png"
              alt="Event background"
              width={1080}
              height={1080}
              className="h-full w-full object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-white">
            <h1 className="text-4xl mb-8 text-center font-bold">Join Us in Creating Memorable Events!</h1>
            <p className="mb-8 text-center text-lg">
            Welcome to the Event Management Portal! Sign up today to gain access to powerful tools that will help you 
            create, organize, and manage your events effortlessly.
            </p>
            <p className="text-center text-base mb-4 max-w-md px-4">Already have an account? </p>
            <Link href={'/admin/login'} className=" rounded-md bg-[#6D717D] px-12 py-3 backdrop-blur-sm transition-colors  duration-300 hover:bg-[#4E545A]">
              Signin
            </Link>

          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-3/5">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
