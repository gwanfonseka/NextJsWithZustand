import { create } from 'zustand'
import axios from 'axios'

const BASE_PATH = 'http://localhost:3001';

export const useMealsStore = create((set) => ({
    meals: [],
    initializeMeals: async () => {
        const response = await axios.get(`${BASE_PATH}/dummyMeals`);
        const data = await response.data;
        set((state) => ({ meals: data }));
    },
}));