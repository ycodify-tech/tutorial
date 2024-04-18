"use server";

import { requireAnonymous } from "@/lib/auth/requireAnonymous";
import { getAccountExists } from "@/api/queries/getAccountExists";
import { ActivateAccountForms } from "./components";

export default async function ActivateAccountPage({
  params,
}: {
  params: { username: string };
}) {
  await requireAnonymous();
  const accountExists = await getAccountExists({ username: params.username });

  if (!accountExists) {
    return <p>Account not found</p>;
  }

  return <ActivateAccountForms username={params.username} />;
}
