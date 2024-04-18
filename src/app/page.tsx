"use server";

import { requireSession } from "@/lib/auth/requireSession";
import { Home } from "./home/Component";

export default async function HomePage() {
  const session = await requireSession();

  return <Home session={session} />;
}
