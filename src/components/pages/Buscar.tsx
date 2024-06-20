import Header from "../layout/Header";
import { Icon } from "@iconify/react";

const Buscar = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Header title="Buscar" />

        <div className="flex flex-col gap-4 h-full items-center justify-center text-gray-400">
          <Icon icon="fluent-mdl2:add-friend" className="text-9xl" />
          <p className="text-3xl text-center font-semibold">
            Hora de fazer mais amigos
          </p>
          <p className="text-slate-600 text-center">
            Adicione seus amigos no EcoAwards para encontrar as publicações
            deles por aqui.
          </p>
        </div>
      </div>
    </>
  );
};

export default Buscar;
