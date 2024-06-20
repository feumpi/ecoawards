import { Icon } from "@iconify/react";
import clsx from "clsx";

import { NavLink } from "react-router-dom";
import RunningModal from "../RunningModal";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white rounded-lg p-2 flex space-around">
        <NavbarItem to="/" title="Início" icon="bx:bx-home" />
        <NavbarItem to="/buscar" title="Buscar" icon="mdi:search" />

        <RunningModal />

        <NavbarItem to="/chat" title="Chat" icon="mdi:chat-outline" />
        <NavbarItem to="/notificacoes" title="Notif." icon="mdi:bell-outline" />
      </div>
    </>
  );
};

interface NavbarItemProps {
  title: string;
  icon: string;
  to: string;
}
const NavbarItem = ({ title, icon, to }: NavbarItemProps) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx("w-full flex flex-col items-center gap-1 font-bold", {
            "text-primary": isActive,
          })
        }
      >
        <Icon icon={icon} className="text-2xl" />
        {title}
      </NavLink>
    </>
  );
};

export default Navbar;
