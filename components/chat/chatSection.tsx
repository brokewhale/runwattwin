import React from 'react'
import 'twin.macro'
import ChatForm from './chatForm'
import OtherMsg from './otherMsg'
import UserMsg from './userMsg'

interface Props {}

const ChatSection = (props: Props) => {
  return (
    <div tw='w-full h-full flex flex-col  justify-between'>
      <div tw='flex flex-col gap-2.5 flex-1'>
        <OtherMsg
          text='What problems are you trying to address?'
          id='1'
          time='08:00 am'
          interval={true}
        />
        <OtherMsg
          text='Sapa is on ground'
          id='1'
          time='08:01 am'
          interval={false}
        />
        <UserMsg
          text='Any Update For your guy? '
          id='2'
          time='08:03 am'
          interval={true}
        />
        <UserMsg
          text='Leave idea, I need your help '
          id='2'
          time='08:05 am'
          interval={false}
        />
        <OtherMsg
          text='I am using it 😒 '
          id='1'
          time='08:06 am'
          interval={true}
        />
      </div>
      <div>
        <ChatForm />
      </div>
    </div>
  )
}

export default ChatSection
