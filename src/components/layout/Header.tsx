import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  back?: boolean;
  description?: string;
}

const Header = ({ title, back, description }: HeaderProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-bold flex gap-4 items-center">
          {back && (
            <Link to="/">
              <Icon icon="mingcute:left-line" className="text-4xl" />
            </Link>
          )}
          {title}
        </div>
        <p className="text-slate-600 text-lg text-center">{description}</p>
      </div>
    </>
  );
};

export default Header;
