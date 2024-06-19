import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  back?: boolean;
}

const Header = ({ title, back }: HeaderProps) => {
  return (
    <>
      <div className="text-3xl font-bold flex gap-4 items-center">
        {back && (
          <Link to="/">
            <Icon icon="mingcute:left-line" className="text-4xl" />
          </Link>
        )}
        {title}
      </div>
    </>
  );
};

export default Header;
