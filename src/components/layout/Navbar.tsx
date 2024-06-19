import { Icon } from "@iconify/react";
import clsx from "clsx";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white rounded-lg p-2 flex space-around">
        <NavbarItem title="Início" icon="bx:bx-home" active />
        <NavbarItem title="Buscar" icon="mdi:search" />
        <div className="w-72 mx-4 h-14 rounded-full bg-primary text-white flex items-center justify-center mt-[-20px]">
          <Icon icon="mdi:run-fast" className="text-3xl" />
        </div>
        <NavbarItem title="Chat" icon="mdi:chat-outline" />
        <NavbarItem title="Notif." icon="mdi:bell-outline" />
      </div>
    </>
  );
};

interface NavbarItemProps {
  title: string;
  icon: string;
  active?: boolean;
}
const NavbarItem = ({ title, icon, active }: NavbarItemProps) => {
  return (
    <>
      <div
        className={clsx("w-full flex flex-col items-center gap-1 font-bold", {
          "text-primary": active,
        })}
      >
        <Icon icon={icon} className="text-2xl" />
        {title}
      </div>
    </>
  );
};

export default Navbar;
