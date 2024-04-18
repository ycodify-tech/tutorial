import { requireAnonymous } from "@/lib/auth/requireAnonymous";
import { Login } from "./Component";

export default async function LoginPage() {
  await requireAnonymous();

  return <Login />;
}
