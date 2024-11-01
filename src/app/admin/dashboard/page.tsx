import DashboardContent from "@/components/DashboardContent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // const { data } = await supabase.auth.getSession();

  // if (!data.session) {
  //   redirect("/admin/login"); // Redirect if no session
  //   return null;
  // }

  return <DashboardContent />; 
}
