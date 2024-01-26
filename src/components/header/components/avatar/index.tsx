import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "../ui/avatar";

export function Profile() {
  return (
    <>
      <Avatar>
        <AvatarImage
          src="https://github.com/IkaueMatos.png"
          alt="imagem  de perfil"
        />
        <AvatarFallback className="text-base">A</AvatarFallback>
      </Avatar>
    </>
  );
}
