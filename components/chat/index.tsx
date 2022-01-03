import React from 'react'
import useGlobalState from '../../store/global'
import SideBox from './sidebox'
import 'twin.macro'

interface Props {}

const ChartContainer = (props: Props) => {
  const { sideData } = useGlobalState()

  return (
    <div>
      <div className='chat__sidebar' tw=' flex flex-col gap-2.5'>
        {sideData.map(item => (
          <SideBox {...item} key={item.text} />
        ))}
      </div>
      <div className='chat-section'></div>
    </div>
  )
}

export default ChartContainer
