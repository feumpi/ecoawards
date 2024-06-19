import GoalCard from "../GoalCard";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const greeting = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    return "Bom dia";
  } else if (hours < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
};

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold">{greeting()}, Felipe</p>
            <p className="text-slate-600 text-lg">
              Quantos pontos você vai fazer hoje? 🔥
            </p>
          </div>
          <Link
            to="/perfil"
            className="bg-indigo-600 rounded-full flex items-center justify-center h-10 w-10 text-lg text-white"
          >
            F
          </Link>
        </div>

        <GoalCard />

        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl">Para onde vamos?</p>

          <div className="flex flex-col gap-4 flex-wrap">
            <div className="flex gap-4">
              <HomeAction
                to="/progresso"
                title="Meu progresso"
                icon="mdi:chart-line"
              />
              <HomeAction
                to="/ranking"
                title="Ranking de amigos"
                icon="mdi:medal-outline"
              />
            </div>
            <div className="flex gap-4">
              <HomeAction
                to="/rotas"
                title="Rotas de corrida"
                icon="gis:map-poi"
              />
              <HomeAction
                to="/sustentabilidade"
                title="Descubra sustentabilidade"
                icon="tabler:leaf"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface HomeActionProps {
  title: string;
  icon: string;
  to: string;
}

const HomeAction = ({ title, icon, to }: HomeActionProps) => {
  return (
    <>
      <Link
        to={to}
        className="w-1/2 rounded-lg bg-gray-200 flex flex-col gap-2 items-center justify-around p-4"
      >
        <Icon icon={icon} className="text-5xl" />
        <p className="text-lg font-bold text-center">{title}</p>
      </Link>
    </>
  );
};

export default Home;
