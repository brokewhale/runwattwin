import React from 'react'
import 'twin.macro'
import { CheckedIcon } from '../icons'

interface Props {
  text: string
  loading?: boolean
  done?: boolean
  opacity?: string
}

const SideBox = (props: Props) => {
  const { text, done, opacity } = props
  return (
    <div
      tw='flex gap-4 justify-center items-center w-full max-w-[250px] h-[85px] rounded-[8px] bg-white '
      style={{
        opacity: `${opacity}`,
      }}
    >
      {done && <CheckedIcon />}
      <span tw='text-[20px] leading-[25px] text-[#424242] font-semibold text-center'>
        {text}
      </span>
    </div>
  )
}

export default SideBox
