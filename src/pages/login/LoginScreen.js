import React from "react";
import { Button } from "../../components/atoms/Button/Button";
import { Heading } from "../../components/atoms/Heading/Heading";
import { Input } from "../../components/atoms/Input/Input";
import { Label } from "../../components/atoms/Label/Label";
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 px-3 h-screen w-screen flex flex-col justify-center items-center">
      <Heading >
        Digital Tech Inc
      </Heading>

      <div className="sm:w-96 w-full bg-white border-dotted  border-2 border-purple-400 px-3 flex flex-wrap mt-10 py-10 px-12">
        <Input
          className={"w-7/12 pl-3 mb-3 h-10 rounded border border-purple-400 bg-slate-100 outline-none focus:ring-0 caret-purple-400 text-zinc-600 py-1"}
          type="text"
          placeholder={"@username"} />

        <Button
          className={"w-4/12 rounded-lg ml-auto h-10 bg-purple-500 hover:bg-purple-600 text-white px-4 py-1"}
        >
          Entrar
        </Button>

        <Label className={"mx-auto mt-5 text-xs text-zinc-500"}>
          ¿No tienes cuenta?
          <Label
            className={"text-bold text-purple-400 cursor-pointer ml-1"}
            hasClick={true}
            onClick={() => navigate("/register")}>
            Registrate aqui
          </Label>
        </Label>
      </div>
    </div>
  );
};
