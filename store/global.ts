import create from 'zustand'
import produce from 'immer'

interface GlobalState {
  count: number
  increaseCount: () => void
  userIdea: string
  updateUserIdea: (value: string) => void
}

const useGlobalState = create<GlobalState>(set => {
  return {
    count: 0,
    increaseCount: () => {
      set(
        produce(state => {
          state.count++
        }),
      )
    },
    userIdea: '',
    updateUserIdea: value => {
      set(
        produce(state => {
          state.userIdea = value
        }),
      )
    },
  }
})

export default useGlobalState
