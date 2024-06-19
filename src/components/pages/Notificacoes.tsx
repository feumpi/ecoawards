import Header from "../layout/Header";

import { Icon } from "@iconify/react";

const Notificacoes = () => {
  const notifications = [
    {
      from: "Nichole",
      content: "ganhou 100 Eco-pontos",
      time: "5min",
      icon: "akar-icons:coin",
    },
    {
      from: "Jeronymo",
      content: "aceitou sua solicitação de amizade.",
      time: "10min",
      icon: "fluent-mdl2:add-friend",
    },
    {
      from: "Mariana",
      content: "comentou em sua publicação.",
      time: "1h",
      icon: "clarity:talk-bubbles-line",
    },
    {
      from: "Ricardo",
      content: "curtiu sua publicação.",
      time: "2h",
      icon: "mdi:like-outline",
    },
    {
      from: "Vinicius",
      content: "compartilhou sua publicação.",
      time: "3h",
      icon: "material-symbols:share",
    },
    {
      from: "Vinicius",
      content: "Ganhou 200 Eco-pontos",
      time: "8h",
      icon: "akar-icons:coin",
    },
    {
      from: "Nichole",
      content: "Ganhou 500 Eco-pontos",
      time: "8h",
      icon: "akar-icons:coin",
    },

    {
      from: "Nichole",
      content: "trocou 500 Eco-pontos por um produto.",
      time: "9h",
      icon: "solar:box-outline",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <Header title="Notificações" />

        <div className="flex flex-col gap-3 mt-4">
          {notifications.map((notification) => (
            <NotificationItem {...notification} />
          ))}
        </div>
      </div>
    </>
  );
};

interface NotificationItemProps {
  from: string;
  content: string;
  time: string;
  icon?: string;
}

const NotificationItem = ({
  from,
  content,
  time,
  icon,
}: NotificationItemProps) => {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-lg p-4 px-4 flex justify-between gap-2 items-center">
        <div className="flex gap-2 items-center">
          {icon && <Icon icon={icon} className="text-xl" />}
          <p>
            <strong>{from}</strong> {content}
          </p>
        </div>
        <p className="text-sm text-slate-600">{time}</p>
      </div>
    </>
  );
};

export default Notificacoes;
