import * as React from 'react'
import { Shell } from '../components'
import ChatContainer from '../components/chat'
import useGlobalState from '../store/global'

interface IChatProps {}

const Chat: React.FunctionComponent<IChatProps> = props => {
  const { userIdea } = useGlobalState()

  return (
    <Shell variant='button' withBg='none' idea={userIdea}>
      <ChatContainer />
    </Shell>
  )
}

export default Chat
