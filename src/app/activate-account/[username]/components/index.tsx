"use client";

import { useState } from "react";
import { ValidateEmail } from "./ValidateEmail";
import { UserPlayerForm } from "./UserPlayerForm";

export function ActivateAccountForms({ username }: { username: string }) {
  const [stage, setStage] = useState(1);

  if (stage === 1) {
    return (
      <div>
        <p>Stage 1</p>
        <ValidateEmail setStage={setStage} username={username} />
      </div>
    );
  }

  if (stage === 2) {
    return (
      <div>
        <p>Stage 1</p>
        <UserPlayerForm username={username} />
      </div>
    );
  }
}
