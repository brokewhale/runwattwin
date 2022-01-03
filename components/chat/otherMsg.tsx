import React from 'react'
import { OperatorIcon } from '../icons'
import 'twin.macro'

interface Props {
  id: string
  text: string
  time: string
  interval: boolean
}

const OtherMsg = (props: Props) => {
  const { text, time, interval } = props
  return (
    <div tw='flex gap-[26px]'>
      <div>
        <OperatorIcon />
      </div>
      <div
        tw='flex justify-center items-center gap-[19.66px]max-w-[418.23px]  bg-[#FDFDFD] rounded-[8px] py-[9.82857px] pl-[15px] pr-[9.82857px]'
        className={interval ? 'chat-bubble' : ''}
      >
        <span tw='text-[#424242] text-[16px] leading-[20px] font-normal tracking-[-0.01em] flex-[0.8]'>
          {text}
        </span>
        <span
          tw='text-[#C4C4C4] text-[13.1048px] leading-4 font-semibold font-lato flex-[0.2]  '
          style={{
            alignSelf: 'last baseline',
            minWidth: '64px',
          }}
        >
          {time}
        </span>
      </div>
    </div>
  )
}

export default OtherMsg
