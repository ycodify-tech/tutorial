export const ycodifyRoutes = {
  auth: {
    signUp: "/v2/id/open/account",
    signIn: "/v2/auth/signin",
  },
  id: {
    accountExists: ({ username }: { username: string }) =>
      `/v2/id/open/account/by/username/${username}/exists`,
    associateAccount: "/v2/id/account-role/using/authority",
    sendRecoveryHash: ({ username }: { username: string }) =>
      `v2/id/open/internal/account/by/username/${username}/hash-for-password-recovery`,
    validateEmail: "v2/id/open/internal/account/confirm-registration",
  },
  persistence: {
    query: "/v2/persistence/q/s/no-ac",
    mutation: "/v2/persistence/c/s/no-ac",
  },
  maestro: {
    ae: "/v2/maestro/ae/no-ac",
    fe: "/v2/maestro/fe/no-ac",
  },
};
