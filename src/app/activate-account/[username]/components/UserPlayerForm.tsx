import { createUserPlayer } from "@/api/queries/createUserPlayer";

export function UserPlayerForm({ username }: { username: string }) {
  async function onSubmit() {
    //validou tudo

    try {
      const createdUserPlayer = await createUserPlayer({
        name: "Nome do artista",
        username,
        streetname: "rua alfredo",
        streetnumber: 123,
        streetcomplement: "casa da rua",
        country: "brasil",
        state: "RN",
        city: "Natal",
        zipcode: "59140590",
        email: "email",
        aboutartist: "Artista de Natal",
        documentnumber: "123456789",
        allownotifications: true,
        avatar: "avatar string",
        skins: "skins string",
        role: "ARTISTA",
        acceptplataformterms: true,
      });

      alert("Usuário criado com sucesso");
    } catch (err) {
      alert("Erro ao criar usuário");
    }
  }

  return (
    <div>
      <p>hi, {username}</p>
      <p>
        form pra cadastrar todos aqueles dados da entidade userplayer vai aqui
      </p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
