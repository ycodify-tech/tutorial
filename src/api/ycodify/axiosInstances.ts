import axios from "axios";

export const ycodifyBase = axios.create({
  baseURL: process.env.YCODIFY_BASE_URL,
});

export const ycodifyExternal = axios.create({
  baseURL: process.env.YCODIFY_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ycodifyQuery = axios.create({
  baseURL: process.env.YCODIFY_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Tenant-ID": process.env.YCODIFY_TENANT_ID,
    "X-API-Master-Key": process.env.YCODIFY_API_MASTER_KEY,
  },
});
