"use client";
import { useState } from "react";
import { loginSubmit } from "../api/externalLogin";
import { getUserPlayer } from "../api/getUserPlayer";

export function Demo() {
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
    const loginResponse = await loginSubmit({ username, password });
    if (loginResponse.error) {
      alert("Erro ao logar");
      return;
    }
    console.log("loginResponse", loginResponse);

    const user = await getUserPlayer({ username });
    console.log("user", user);
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
