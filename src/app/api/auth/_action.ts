import { ycodifyExternal } from "@/api/ycodify/axiosInstances";
import { ycodifyRoutes } from "@/api/ycodify/routes";

export async function authenticate(username: string, password: string) {
  try {
    const response = await ycodifyExternal.post(ycodifyRoutes.auth.signIn, {
      username,
      password,
    });

    return response.data;
  } catch (err: unknown) {
    console.log("signin error", err);

    return null;
  }
}
