import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Icon } from "@iconify/react";

import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";

import useAppStore from "@/store";

const GoalCard = () => {
  const user = useAppStore((state) => state.user);
  const setUserGoal = useAppStore((state) => state.setUserGoal);

  return (
    <>
      <div className="w-full bg-primary text-white rounded-lg p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Minha meta</p>
          <Dialog>
            <DialogTrigger>
              <Icon icon="mdi:cog" className="text-xl" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-bold text-2xl">
                  Configurar meta
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-lg text-center">
                Escolha uma nova meta de Eco-pontos para acompanhar na sua tela
                inicial.
              </DialogDescription>

              <div className="p-4 py-8 flex gap-2">
                <Slider
                  defaultValue={[user.goal]}
                  min={1000}
                  max={3000}
                  onValueChange={(values) => setUserGoal(values[0])}
                  step={100}
                />
                <div className="bg-gray-200 rounded-lg p-1 px-2">
                  {user.goal}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {user.points < user.goal && (
          <div className="flex flex-col gap-1">
            <p className="flex items-end gap-2">
              <span className="text-3xl">{user.points}</span>{" "}
              <span className="text-lg opacity-80">
                / {user.goal} Eco-pontos
              </span>
            </p>
            <Progress value={(user.points / user.goal) * 100} />
          </div>
        )}

        {user.points >= user.goal && (
          <div className="flex flex-col gap-2 items-end">
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold">Parabéns! 🎉</p>
              <p className="text-lg">
                Você já alcançou sua meta de {user.goal} Eco-pontos.
              </p>
            </div>
            <Button variant="outline" className="text-black flex gap-2 text-md">
              <Icon icon="gridicons:external" className="text-xl" />
              Ver produtos disponíveis
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default GoalCard;
