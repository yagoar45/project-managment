import React, { useState } from "react";
import { Button } from "../../shadcn/components/ui/button";
import { Input } from "../../shadcn/components/ui/input";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { ReloadIcon } from "@radix-ui/react-icons";
import Logo from "../../components/Logo";

export function ButtonLoading() {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}

export default function Login() {
  const { login, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex gap-20 h-screen w-full px-40 py-28">
      <div className="w-1/2 bg-muted rounded-xl p-12">
        <Logo />
        <h2 className="mt-24 text-4xl leading-[50px] font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h2>
        <p className="mt-10 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          debitis dolore, dicta fugiat iure quia! Hic facilis aut ducimus
          aliquam blanditiis ex ea. Ipsa omnis quas impedit maiores ad unde?
        </p>
        <div className="bg-foreground text-background p-8 rounded-xl mt-16 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          quasi molestias molestiae, pariatur, doloribus neque saepe sit hic
          quis sequi nulla non quidem accusantium harum ipsa minima adipisci
          iure obcaecati!
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/2 px-20">
        <div>
          <h1 className="text-3xl font-semibold">Entre na sua conta</h1>
          <p className="mt-4 text-muted-foreground font-normal text-lg">
            Informe os seus dados de acesso
          </p>
          <form className="mt-10" onSubmit={handleLogin}>
            <p className="mt-5 text-muted-foreground mb-2.5">E-mail</p>
            <Input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="mt-5 text-muted-foreground mb-2.5">Senha</p>
            <Input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              size="xl"
              className="mt-10 text-lg w-full"
              disabled={isPending}
            >
              {isPending && (
                <ReloadIcon className="w-5 h-5 mr-2 animate-spin" />
              )}
              Entrar na minha conta
            </Button>
          </form>
          <div className="mt-12 flex justify-center gap-2 text-lg">
            <p>Não tem uma conta?</p>
            <Link to="/signup" className="text-primary">
              Cadastre-se agora.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
