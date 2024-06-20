import Header from "../layout/Header";
import { Icon } from "@iconify/react";

const Progresso = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Header title="Progresso" back />

        <div className="flex flex-col gap-4 h-full items-center justify-center text-gray-400">
          <Icon icon="raphael:lab" className="text-9xl" />
          <p className="text-3xl text-center font-semibold">
            Ainda coletando dados do seu progresso
          </p>
          <p className="text-slate-600 text-center">
            Comece a correr com mais frequência para rastrear a sua progressão.
          </p>
        </div>
      </div>
    </>
  );
};

export default Progresso;
