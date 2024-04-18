"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export function Home({ session }: { session: Session }) {
  return (
    <div className="flex gap-x-8">
      <p>protected {session.user.username}</p>
      <button
        onClick={() => signOut()}
        className="bg-red-500 rounded-md px-3 py-2 text-white"
      >
        Sign out
      </button>
    </div>
  );
}
