"use client";
import { useState } from "react";
import { createExternalAccount } from "../api/createExternalAccount";
import { createUserPlayer } from "../api/createUserPlayer";

export function SignupComponent() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "ARTIST",
    organizationUuid: "481d4c8c-2cac-3138-a825-e29bce349355",
  });

  async function onSubmit(formData: any) {
    console.log("formData", formData);

    const createAccountResponse = await createExternalAccount({
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: String(formData.role).toUpperCase() as "ARTIST" | "VIEWER",
      organizationUuid: formData.organizationUuid,
    });

    console.log("createAccountResponse", createAccountResponse);

    const createUserPlayerResponse = await createUserPlayer({
      name: "Nome do artista",
      username: formData.username as string,
      streetname: "rua alfredo",
      streetnumber: 123,
      streetcomplement: "casa da rua",
      country: "brasil",
      state: "RN",
      city: "Natal",
      zipcode: "59140590",
      email: formData.email,
      aboutartist: "Artista de Natal",
      documentnumber: "123456789",
      allownotifications: true,
      avatar: "avatar string",
      skins: "skins string",
      role: formData.role,
      acceptplataformterms: true,
    });

    console.log("createUserPlayerResponse", createUserPlayerResponse);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className="grid gap-4 max-w-24"
    >
      <input
        type="text"
        placeholder="username"
        value={formData.username}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, username: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="role"
        value={formData.role}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, role: e.target.value }))
        }
      />
      <button type="submit" className="text-black p-3 bg-white">
        submit
      </button>
    </form>
  );
}
