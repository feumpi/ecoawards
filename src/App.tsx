import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 p-4 pt-6 flex flex-col">
        <div className="grow">
          <Home />
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default App;
