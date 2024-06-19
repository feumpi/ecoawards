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
