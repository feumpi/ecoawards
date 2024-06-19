import Navbar from "./Navbar";

interface WithNavbarProps {
  children: React.ReactNode | React.ReactNode[];
}

const WithNavbar = ({ children }: WithNavbarProps) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="grow">{children}</div>
        <Navbar />
      </div>
    </>
  );
};

export default WithNavbar;
