import { create } from "zustand";

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

type User = {
  name: string;
  email: string;
  image: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setImage: (image: string) => void;
};

const useCounterStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const useAuthStore = create<User>((set) => ({
  name: "",
  email: "",
  image: "",
  setName: (name) => set(() => ({ name })),
  setEmail: (email) => set(() => ({ email })),
  setImage: (image) => set(() => ({ image })),
}));

export default useCounterStore;

// Usage example:
// import useCounterStore, { useAuthStore } from "@/store/store";
