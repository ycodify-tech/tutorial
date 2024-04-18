"use server";

import axios from "axios";
import { ycodifyRoutes } from "../ycodify/routes";

export async function sendRecoveryHash({ username }: { username: string }) {
  const { data } = await axios.get(
    ycodifyRoutes.id.sendRecoveryHash({ username }),
    {
      baseURL: process.env.YCODIFY_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}
