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
        bgClass: "bg-purple-700",
        friends: [
          {
            firstName: "Nichole",
            lastName: "Nicolini",
            points: 5000,
            goal: 2000,
            friends: [],
            bgClass: "bg-sky-700",
          },
          {
            firstName: "Vinicius",
            lastName: "Gobbi",
            points: 500,
            goal: 2000,
            friends: [],
            bgClass: "bg-green-600",
          },
          {
            firstName: "Jeronymo",
            lastName: "",
            points: 230,
            goal: 2000,
            friends: [],
            bgClass: "bg-pink-600",
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
