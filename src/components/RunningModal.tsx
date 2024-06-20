import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Icon } from "@iconify/react";

import { useState, useEffect } from "react";

const RunningModal = () => {
  const [speed, setSpeed] = useState(10);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setSpeed(0);
    setDistance(0);

    const interval = setInterval(() => {
      const localSpeed = Math.random() * 10 + 5;
      setSpeed(localSpeed);

      setDistance((prev) => prev + localSpeed / 3.6);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Dialog>
        <DialogTrigger className="w-72 h-full mx-4">
          <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center mt-[-20px]">
            <Icon icon="mdi:run-fast" className="text-3xl" />
          </div>
        </DialogTrigger>
        <DialogContent className="h-screen bg-primary text-white flex flex-col gap-32 items-center justify-center">
          <p className="text-3xl text-center">Acompanhando sua corrida</p>
          <Icon icon="mdi:run-fast" className="text-8xl animate-ping" />

          <div className="flex justify-around w-full">
            <div className="flex flex-col gap-1">
              <p className="text-xl">Velocidade</p>
              <p className="text-3xl">
                {speed.toFixed(1).replace(".", ",")} Km/h
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-xl">Distância</p>
              <p className="text-3xl">{distance.toFixed(0)} m</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RunningModal;
