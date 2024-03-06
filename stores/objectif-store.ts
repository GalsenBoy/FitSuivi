// store.ts
import { create } from 'zustand';

type ObjectifStore = {
    distance: number;
    exercice: number;
    water: number;
    sleep: number;
    setDistance: (value: number) => void;
    setExercice: (value: number) => void;
    setWater: (value: number) => void;
    setSleep: (value: number) => void;
};

export const useObjectifStore = create<ObjectifStore>((set) => ({
    distance: 0,
    exercice: 0,
    water: 0,
    sleep: 0,
    setDistance: (value) => set({ distance: value }),
    setExercice: (value) => set({ exercice: value }),
    setWater: (value) => set({ water: value }),
    setSleep: (value) => set({ sleep: value }),
}));
