import React from 'react'
import 'twin.macro'
import OtherMsg from './otherMsg'
import UserMsg from './userMsg'

interface Props {}

const ChatSection = (props: Props) => {
  return (
    <div tw='w-full h-full'>
      <div tw='flex flex-col gap-2.5'>
        <OtherMsg
          text='What problems do your idea address?'
          id='1'
          time='08:00 am'
          interval={true}
        />
        <OtherMsg
          text='Sapa is on geound'
          id='1'
          time='08:01 am'
          interval={false}
        />
        <UserMsg text='I don Give up ' id='2' time='08:03 am' interval={true} />
        <UserMsg
          text='Any Update For your guy? '
          id='2'
          time='08:05 am'
          interval={false}
        />
      </div>
    </div>
  )
}

export default ChatSection
