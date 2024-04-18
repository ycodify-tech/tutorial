import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User;
    accessToken: string;
  }

  interface User {
    id: number;
    accessToken: string;
    tokenType: string;
    roles: string[];
    username: string;
    streetname: string;
    streetnumber: string;
    streetcomplement: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    email: string;
    name: string;
    aboutartist: string;
    documentnumber: string;
    allownotifications: string;
    avatar: string;
    skins: string;
    role: string;
    acceptplataformterms: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  }
}
