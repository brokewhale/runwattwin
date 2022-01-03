import React from 'react'
import useGlobalState from '../../store/global'
import SideBox from './sidebox'
import 'twin.macro'
import ChatSection from './chatSection'

interface Props {}

const ChartContainer = (props: Props) => {
  const { sideData } = useGlobalState()

  return (
    <div tw='flex gap[45.5px]'>
      <div
        className='chat__sidebar'
        tw=' flex flex-col gap-2.5 max-w-[250px] w-full'
      >
        {sideData.map(item => (
          <SideBox {...item} key={item.text} />
        ))}
      </div>
      <div className='chat-section' tw='w-full'>
        <ChatSection />
      </div>
    </div>
  )
}

export default ChartContainer
