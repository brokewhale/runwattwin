import * as React from 'react'
import tw from 'twin.macro'

interface IBtnProps {
  width?: string
  height?: string
  fontSize?: string
  isMobile?: boolean
  widthMobile?: string
  heightMobile?: string
  fontSizeMobile?: string
}

export const Btn: React.FunctionComponent<IBtnProps> = ({ children }) => {
  return (
    <div tw='w-[250px] h-[85px] text-[18px] leading-6 font-medium flex justify-center items-center gap-5 bg-buttonBlue  rounded-[7.19697px] cursor-pointer break-xsmobile:w-[158px] h-[60px] text-[16px]'>
      {children}
    </div>
  )
}
