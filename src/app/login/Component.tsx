"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { sendRecoveryHash } from "@/api/queries/sendRecoveryHash";
import { useRouter } from "next/navigation";

export function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  async function onSubmit({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
    console.log("loginResult", result);

    if (!result?.error) {
      return;
    }

    const error = JSON.parse(result?.error as string);
    switch (error?.status) {
      case 401:
        alert("Incorrect username or password");
        return;
      case 403:
        await sendRecoveryHash({
          username: username,
        });
        alert("Recovery hash sent to your email");

        router.push("/activate-account");
        return;
      default:
        console.log("error", error);
        alert("Ops! Something went wrong");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-6xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            username: formData.username,
            password: formData.password,
          });
        }}
        className="flex flex-col gap-y-3"
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="inputUsername">Username</label>
          <input
            id="inputUsername"
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
            type="text"
            placeholder="username"
            className="text-black"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="inputPassword">Password</label>
          <input
            id="inputPassword"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
            placeholder="password"
            className="text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center py-2 px-3 bg-white rounded-md text-black"
        >
          Submeter
        </button>
      </form>
    </main>
  );
}
