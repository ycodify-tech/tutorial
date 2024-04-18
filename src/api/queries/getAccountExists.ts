"use server";
import { ycodifyBase } from "../ycodify/axiosInstances";
import { getData } from "../ycodify/persistence";
import { ycodifyRoutes } from "../ycodify/routes";

type TGetAccountExists = {
  username: string;
};

export async function getAccountExists({
  username,
}: TGetAccountExists): Promise<boolean> {
  try {
    const response = await ycodifyBase.get(
      ycodifyRoutes.id.accountExists({ username })
    );

    return response.status === 200;
  } catch (error) {
    return false;
  }
}
