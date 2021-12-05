import 'twin.macro'
import Image from 'next/image'
import { Navbar } from '.'
interface ShellProps {
  variant?: 'main' | 'button'
  withBg?: 'main' | 'button' | 'none'
  isSmall?: boolean
}
function Shell({ variant, withBg }: ShellProps) {
  return (
    <div tw='h-screen w-full relative bg-mainBg '>
      <div
        className='shell'
        tw='h-[95vh] w-[161.17px] absolute right-0 z-50 top-2  '
      ></div>

      {withBg === 'main' && <div className='main__bg'></div>}
      {withBg === 'button' && <div className='button__bg'></div>}

      <Navbar variant={variant} />
    </div>
  )
}

export default Shell
