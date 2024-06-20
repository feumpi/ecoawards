import { create } from "zustand";
import { persist } from "zustand/middleware";

import User from "./interfaces/User";

interface AppState {
  user: User;
  setUserGoal: (goal: number) => void;
}

const appStore = create<AppState>()(
  persist(
    (set) => ({
      user: {
        firstName: "Felipe",
        lastName: "Umpierre",
        points: 1450,
        goal: 2000,
        profilePicture: "https://github.com/feumpi.png",
        bannerPicture:
          "https://pbs.twimg.com/profile_banners/1343985485501370368/1710347590/600x200",
        products: [
          {
            title: "Garrafa Sustentável",
            picture:
              "https://img.freepik.com/fotos-premium/uma-garrafa-de-agua-ecologica-e-sustentavel-feita-de-bambu-generativo-ai_601748-46418.jpg",
          },
          {
            title: "Bicicleta sustentável",
            picture:
              "https://conexaoplaneta.com.br/wp-content/uploads/2019/01/feita-de-plastico-reciclado-bicicleta-brasileira-nao-tem-solda-nem-enferruja-6-conexao-planeta.jpg",
          },
        ],
        updates: [
          {
            icon: "mdi:run-fast",
            title: "Corrida em alta velocidade",
            points: "300",
          },
          {
            icon: "mdi:walk",
            title: "Caminhada",
            points: "50",
          },
          {
            icon: "mdi:run",
            title: "Corrida simples",
            points: "150",
          },
        ],
        conquistas: [
          {
            title: "EcoWarrior",
            icon: "tabler:helmet",
          },
          {
            title: "EcoFriendly",
            icon: "mdi:leaf",
          },
          {
            title: "EcoRunner",
            icon: "mdi:run",
          },
        ],
        friends: [
          {
            firstName: "Nichole",
            lastName: "Nicolini",
            points: 5000,
            goal: 2000,
            friends: [],
            profilePicture: "https://github.com/nicholetzs.png",
            bannerPicture:
              "https://pbs.twimg.com/profile_banners/1343985485501370368/1710347590/600x200",
            products: [],
            conquistas: [],
            updates: [],
          },
          {
            firstName: "Vinicius",
            lastName: "Gobbi",
            points: 500,
            goal: 2000,
            friends: [],
            profilePicture: "https://github.com/vinicgobbi.png",
            bannerPicture:
              "https://pbs.twimg.com/profile_banners/1343985485501370368/1710347590/600x200",
            products: [],
            conquistas: [],
            updates: [],
          },
          {
            firstName: "Jeronymo",
            lastName: "",
            points: 230,
            goal: 2000,
            friends: [],
            profilePicture: "https://github.com/jeronymo.png",
            bannerPicture:
              "https://pbs.twimg.com/profile_banners/1343985485501370368/1710347590/600x200",
            products: [],
            conquistas: [],
            updates: [],
          },
        ],
      },

      setUserGoal: (goal) => {
        set((state) => ({
          user: {
            ...state.user,
            goal,
          },
        }));
      },
    }),
    {
      name: "ecoawards",
    }
  )
);

export default appStore;
