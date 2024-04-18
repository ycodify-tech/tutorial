"use server";

import { ycodifyExternal } from "../ycodify/axiosInstances";

export async function loginSubmit({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const { data } = await ycodifyExternal.post("/v2/auth/signin", {
      username,
      password,
    });

    return data;
  } catch (err) {
    return {
      // @ts-ignore
      error: err.message,
    };
  }
}
