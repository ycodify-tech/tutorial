"use server";

import { ycodifyRoutes } from "../ycodify/routes";
import { ycodifyBase } from "../ycodify/axiosInstances";

export async function validateEmail({
  username,
  hash,
}: {
  username: string;
  hash: string;
}) {
  const response = await ycodifyBase.put(ycodifyRoutes.id.validateEmail, {
    username,
    hash,
  });

  return response;
}
