"use server";

import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../config/nextAuthOptions";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function requireAnonymous() {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    return;
  }

  const headerList = headers();
  const callbackUrl = headerList.get("referer") || "";

  redirect(callbackUrl || "/");
}
