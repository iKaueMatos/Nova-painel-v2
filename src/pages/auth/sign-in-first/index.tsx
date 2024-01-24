import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

const signInFirstForm = z.object({
  email: z.string().email(),
});

type SignInFirstForm = z.infer<typeof signInFirstForm>;

export function SingInFirst() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFirstForm>();

  async function handleSignIn(data: SignInFirstForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Enviamos um link de autenticação para seu e-mail.", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
        },
      });
    } catch (error) {
      toast.error("Credenciais inválidas!");
    }
  }

  return (
    <>
      <Helmet title="Entrar" />
      <div className="p-8">
        <Button asChild variant="ghost" className="absolute right-4 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
        <div className="w-[320px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form
            className="space-y-4"
            action=""
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input id="email" type="email" {...register("email")} required />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
