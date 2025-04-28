// stores/userStore.ts
import { create } from "zustand";

interface UserState {
  name: string;
}

interface UserActions {
  updateName: (name: string) => void;
}

const useUserStore = create<UserState & UserActions>((set) => ({
  name: "",
  updateName: (name: string) => set({ name }),
}));

export default useUserStore;
