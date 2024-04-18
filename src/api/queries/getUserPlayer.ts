"use server";
import { getData } from "../ycodify/persistence";

type TGetUserPlayer = {
  username: string;
};

export async function getUserPlayer({ username }: TGetUserPlayer) {
  const { data: responseData } = await getData([
    {
      userplayer: {
        username,
        streetname: "",
        streetnumber: "",
        streetcomplement: "",
        country: "",
        state: "",
        city: "",
        zipcode: "",
        email: "",
        name: "",
        aboutartist: "",
        documentnumber: "",
        allownotifications: "",
        avatar: "",
        skins: "",
        role: "",
        acceptplataformterms: "",
      },
    },
  ]);

  return responseData.at(0).userplayer.at(0);
}
