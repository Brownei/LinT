import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  user: {
    bio: "",
    createdAt: "",
    fullName: "",
    id: 0,
    links: [],
    location: "",
    occupation: "",
    profileImage: "",
    userId: 0,
    username: "",
  }
}

export const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,
      setUser: (newData) => set((state) => ({ user: { ...state.user, ...newData } })),
      clear: () => set(initialState)
    }),
    {
      name: "user-storage",
    }
  )
)

export const profileState = {
  profile: {
    email: "",
    emailVerified: "",
    fullName: "",
    id: 0,
    profileImage: ""
  }
}


export const useSettingProfileStore = create(
  persist(
    (set) => ({
      ...profileState,
      setProfile: (newData) => set((state) => ({ profile: { ...state.profile, ...newData } })),
      clearProfile: () => set(profileState)
    }),
    {
      name: "profile-storage",
    }
  )
)
