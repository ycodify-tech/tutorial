import { getData } from "../ycodify/persistence";

export async function geUserPlayerByUsername({
  username,
}: {
  username: string;
}) {
  const data = await getData([
    {
      userplayer: {
        username,
      },
    },
  ]);

  return Boolean(data);
}
