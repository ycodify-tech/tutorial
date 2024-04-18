import { validateEmail } from "@/api/queries/validateEmail";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

export function ValidateEmail({
  setStage,
  username,
}: {
  setStage: Dispatch<SetStateAction<number>>;
  username: string;
}) {
  const [hash, setHash] = useState("hash");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //validou tudo

    try {
      const response = await validateEmail({
        username,
        hash,
      });

      setStage(2);
    } catch (err) {
      alert("Erro ao validar email");
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>hi, {username}</p>
        <p>form pra colocar o codigo do email</p>
        <input
          type="text"
          placeholder="email hash"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
