import Header from "../layout/Header";
import { Icon } from "@iconify/react";

const Chat = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Header title="Chat" />

        <div className="flex flex-col gap-4 h-full items-center justify-center text-gray-400">
          <Icon icon="game-icons:melting-ice-cube" className="text-9xl" />
          <p className="text-3xl text-center font-semibold">
            Hora de quebrar o gelo
          </p>
          <p className="text-slate-600 text-center">
            Adicione seus amigos no EcoAwards e comece a conversar com eles por
            aqui.
          </p>
        </div>
      </div>
    </>
  );
};

export default Chat;
