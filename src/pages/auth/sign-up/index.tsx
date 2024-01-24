import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

const signUpForm = z.object({
  company: z.string(),
  adminName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SingUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingUpForm>();

  async function handleSignIn(data: SingUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Cadastro efetuado com sucesso!", {
        action: {
          label: "Entrar",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch (error) {
      toast.error("Credenciais inválidas!");
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild variant="ghost" className="absolute right-4 top-8">
          <Link to="/sign-in">Entrar</Link>
        </Button>
        <div className="w-[320px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie sua Conta Grátis!
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas em tempo real
            </p>
          </div>
          <form
            className="space-y-4"
            action=""
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label htmlFor="company">Nome do estabelecimento</Label>
              <Input
                id="company"
                type="text"
                {...register("company")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminName">Seu nome</Label>
              <Input
                id="adminName"
                type="text"
                {...register("adminName")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input id="email" type="email" {...register("email")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input id="phone" type="phone" {...register("phone")} required />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar Cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar você concorda com nosso{" "}
              <a href="" className="text-red-600 font-semibold underline">
                termos de serviços
              </a>{" "}
              e{" "}
              <a href="" className="text-red-600 font-semibold underline">
                politicas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
