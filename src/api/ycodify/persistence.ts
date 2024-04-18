"use server";

import { ycodifyQuery } from "./axiosInstances";
import { ycodifyRoutes } from "./routes";

export async function mutateData(query: any) {
  const { data } = await ycodifyQuery.post(
    ycodifyRoutes.persistence.mutation,
    JSON.stringify(query)
  );

  return data;
}

export async function getData(query: any) {
  const { data } = await ycodifyQuery.post(
    ycodifyRoutes.persistence.query,
    JSON.stringify(query)
  );

  return data;
}
