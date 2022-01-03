import create from 'zustand'
import produce from 'immer'
import { chatSidebarData } from './data'

interface SideData {
  text: string
  done: boolean
  opacity: string
}
interface GlobalState {
  count: number
  increaseCount: () => void
  userIdea: string
  updateUserIdea: (value: string) => void
  sideData: SideData[]
}

const useGlobalState = create<GlobalState>(set => {
  return {
    sideData: chatSidebarData,
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
