import { create, StateCreator } from "zustand";

interface UserSlice {
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
    fullName: string;
    setFullName: (fullName: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    address: string;
    setAddress: (address: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    birth: string;
    setBirth: (birth: string) => void
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
    isLogin: false,
    setIsLogin: (isLogin) => set({ isLogin }),
    fullName: '',
    setFullName: (fullName) => set({ fullName }),
    email: '',
    setEmail: (email) => set({ email }),
    password: '',
    setPassword: (password) => set({ password }),
    address: '',
    setAddress: (address) => set({ address }),
    phone: '',
    setPhone: (phone) => set({ phone }),
    birth: '',
    setBirth: (birth) => set({ birth }),
});
