import React from 'react'
import 'twin.macro'

interface Props {
  id: string
  text: string
  time: string
  interval: boolean
}

const UserMsg = (props: Props) => {
  const { text, time, interval } = props

  return (
    <div tw='flex gap-[26px] justify-end'>
      <div
        tw='flex justify-center items-center gap-[19.66px]max-w-[418.23px]  bg-[#4891ff] rounded-[8px] py-[9.82857px] pl-[15px] pr-[9.82857px]'
        className={interval ? 'chat-bubble-user' : ''}
      >
        <span tw='text-white text-[16px] leading-[20px] font-normal tracking-[-0.01em] flex-[0.8]'>
          {text}
        </span>
        <span
          tw='text-white text-[13.1048px] leading-4 font-semibold font-lato flex-[0.2] text-opacity-70 '
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

export default UserMsg
