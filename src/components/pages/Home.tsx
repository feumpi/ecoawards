import GoalCard from "../GoalCard";
import { Icon } from "@iconify/react";

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
          <div className="bg-indigo-600 rounded-full flex items-center justify-center h-10 w-10 text-lg text-white">
            F
          </div>
        </div>

        <GoalCard />

        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl">Para onde vamos?</p>

          <div className="flex flex-col gap-4 flex-wrap">
            <div className="flex gap-4">
              <HomeAction title="Meu progresso" icon="mdi:chart-line" />
              <HomeAction title="Ranking de amigos" icon="mdi:medal-outline" />
            </div>
            <div className="flex gap-4">
              <HomeAction title="Rotas de corrida" icon="gis:map-poi" />
              <HomeAction
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
}

const HomeAction = ({ title, icon }: HomeActionProps) => {
  return (
    <>
      <div className="w-1/2 rounded-lg bg-gray-200 flex flex-col gap-2 items-center justify-around p-4">
        <Icon icon={icon} className="text-5xl" />
        <p className="text-lg font-bold text-center">{title}</p>
      </div>
    </>
  );
};

export default Home;
