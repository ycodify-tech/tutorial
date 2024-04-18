"use server";

import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../config/nextAuthOptions";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function requireSession() {
  const session = await getServerSession(nextAuthOptions);
  if (session) {
    return session;
  }

  const headerList = headers();
  const callbackUrl = headerList.get("referer") || "";

  if (!callbackUrl) {
    return redirect("/login");
  }

  return redirect(`/login?callbackUrl=${callbackUrl}`);
}
