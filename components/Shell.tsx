import * as React from 'react'
import 'twin.macro'
import Image from 'next/image'
import { Navbar } from '.'

interface IShellProps {
  variant?: 'main' | 'button'
  withBg?: 'main' | 'button' | 'none'
  isSmall?: boolean
  idea?: string
}

const Shell: React.FunctionComponent<IShellProps> = ({
  variant,
  idea,
  withBg,
  children,
}) => {
  return (
    <div tw='h-screen w-full relative bg-mainBg '>
      <div
        className='shell'
        tw='h-[95vh] w-[161.17px] absolute right-0 z-50 top-2  '
      ></div>

      {withBg === 'main' && <div className='main__bg'></div>}
      {withBg === 'button' && <div className='button__bg'></div>}

      <Navbar variant={variant} idea={idea} />
      <div tw='w-full max-w-[90vw] my-0 mx-auto relative z-[100]'>
        {children}
      </div>
    </div>
  )
}

export default Shell
