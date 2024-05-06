import { create } from "zustand";
import { devtools } from "zustand/middleware";

const createPlantSlice = () => ({
  bananas: 13
})

const createAnimalSlice = (set) => ({
  bears: 22,
  addBear: () => set((state) => ({
    animalStore: { ...state.animalStore, bears: state.animalStore.bears + 1 }
  }))
})

export const store = create(devtools((set) => ({
  plantStore: createPlantSlice(),
  animalStore: createAnimalSlice(set)
})))