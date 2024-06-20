import Home from "./components/pages/Home";
import Buscar from "./components/pages/Buscar";
import Chat from "./components/pages/Chat";
import Notificacoes from "./components/pages/Notificacoes";

import Progresso from "./components/pages/Progresso";
import Ranking from "./components/pages/Ranking";
import Rotas from "./components/pages/Rotas";
import Sustentabilidade from "./components/pages/Sustentabilidade";

import WithNavbar from "./components/layout/WithNavbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <WithNavbar>
          <Home />
        </WithNavbar>
      ),
    },
    {
      path: "/buscar",
      element: (
        <WithNavbar>
          <Buscar />
        </WithNavbar>
      ),
    },
    {
      path: "/chat",
      element: (
        <WithNavbar>
          <Chat />
        </WithNavbar>
      ),
    },
    {
      path: "/notificacoes",
      element: (
        <WithNavbar>
          <Notificacoes />
        </WithNavbar>
      ),
    },
    {
      path: "/progresso",
      element: <Progresso />,
    },
    {
      path: "/ranking",
      element: <Ranking />,
    },
    {
      path: "/rotas",
      element: <Rotas />,
    },
    {
      path: "/sustentabilidade",
      element: <Sustentabilidade />,
    },
  ]);

  return (
    <>
      <div className="h-screen w-screen bg-gray-100 p-4 pt-6 flex flex-col">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
