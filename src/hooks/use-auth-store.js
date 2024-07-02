import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
    user: null
}

export const useAuthStore = create(
    persist(
        (set) => ({
            ...initialState,
            setUser: (newData) => set((state) => ({ user: { ...state.user, ...newData } })),
            clear: () => set({ ...initialState })
        }),
        {
            name: "auth-store",
        }
    )
)

const profileState = {
    profile: null
}


export const useSettingProfileStore = create(
    persist(
        (set) => ({
            ...profileState,
            setProfile: (newData) => set((state) => ({ profile: { ...state.profile, ...newData } })),
            clearProfile: () => set({ ...profileState })
        }),
        {
            name: "profile-store",
        }
    )
)