"use server";
import { ycodifyExternal } from ".";

export type TSignupSchema = {
  username: string;
  email: string;
  password: string;
  role: "ARTIST" | "VIEWER";
  organizationUuid: string;
};

export async function createExternalAccount(data: TSignupSchema) {
  try {
    const clientExists = await ycodifyExternal
      .get(`/id/open/account/by/username/${data.username}/exists`)
      .then((res) => res.status === 200);

    if (clientExists) {
      throw new Error("Usuário já cadastrado");
    }

    const { data: responseData } = await ycodifyExternal.post(
      "/id/open/account-role",
      {
        account: {
          username: data.username,
          password: data.password,
          email: data.email,
        },
        role: {
          name: data.role,
          owner: data.organizationUuid,
        },
      }
    );

    return responseData;
  } catch (err: unknown) {
    console.log("signup error", err);
    return {
      error: err,
    };
  }
}
