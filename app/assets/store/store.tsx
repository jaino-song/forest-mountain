import { create } from "zustand";
import { createUserSlice } from "./userstore";

export const useAllStore = create((...a: any[]) => ({
    createUserSlice,
}))
