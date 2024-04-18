import { requireAnonymous } from "@/lib/auth/requireAnonymous";
import { SignupComponent } from "./Component";

export default async function SignupPage() {
  await requireAnonymous();

  return <SignupComponent />;
}
