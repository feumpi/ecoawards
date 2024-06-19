import Header from "../layout/Header";
import useAppStore from "@/store";
import User from "@/interfaces/User";
import clsx from "clsx";
import { Icon } from "@iconify/react";
const Ranking = () => {
  const user = useAppStore((state) => state.user);
  const users = [user, ...user.friends].sort((a, b) => b.points - a.points);

  return (
    <>
      <div className="flex flex-col gap-4 h-full">
        <Header
          title="Ranking"
          description="Quem você quer ultrapassar? 👀"
          back
        />

        {users?.map((user, index) => (
          <div key={user.firstName}>
            <RankingItem user={user} position={index + 1} />
          </div>
        ))}

        <div className="grow flex items-center justify-center opacity-15 rotate-[-30deg]">
          <Icon icon="mdi:podium-gold" className="text-primary h-60 w-60" />
        </div>
      </div>
    </>
  );
};

interface RankingItemProps {
  user: User;
  position: number;
}

const RankingItem = ({ user: currentUser, position }: RankingItemProps) => {
  return (
    <div
      className={clsx(
        "flex gap-4  p-2 px-4 rounded-lg items-center justify-between",
        {
          "bg-amber-100 border border-amber-300": position === 1,
          "bg-slate-200 border border-slate-300": position === 2,
          "bg-orange-100 border border-orange-200": position === 3,
          "border border-gray-300": position > 3,
        }
      )}
    >
      <div
        className={`h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold`}
      >
        {currentUser.firstName[0]}
      </div>
      <div className=" flex flex-col grow">
        <p className="text-xl font-bold">
          {currentUser.firstName} {currentUser.lastName}{" "}
          {position === 1 && "👑"}
          {position === 2 && "🥈"}
          {position === 3 && "🥉"}
        </p>
        <p className="text-lg text-slate-700">
          {currentUser.points} Eco-pontos
        </p>
      </div>

      <div
        className={clsx(
          "w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold",
          {
            "bg-amber-300": position === 1,
            "bg-slate-400": position === 2,
            "bg-orange-300": position === 3,
            "border border-gray-300": position > 3,
          }
        )}
      >
        {position}
      </div>
    </div>
  );
};

export default Ranking;
