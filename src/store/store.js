import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useQNA = create(
  persist(
    (set) => ({
      question: [],
      ans: [],
      addAns: (ans) =>
        set((state) => ({
          ans: [...state.ans, ans],
        })),
      addQuestion: (question) =>
        set((state) => ({
          question: [...state.question, question],
        })),
    }),
    {
      name: "shotpicks",
    }
  )
);