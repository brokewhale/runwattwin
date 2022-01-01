import * as React from 'react'
import Image from 'next/image'
import LogoRunway from '../public/assets/svg/Vector.svg'
import ArrowButton from '../public/assets/svg/ButtonArrow.svg'
import { useRouter } from 'next/router'

import 'twin.macro'

interface INavbarProps {
  variant?: 'main' | 'button'
  idea?: string
}

const Navbar: React.FunctionComponent<INavbarProps> = props => {
  const router = useRouter()

  return (
    <>
      {props.variant === 'main' ? (
        <div tw='h-[79.6592px] pt-[1.93rem] pb-[1.5488rem] pr-[6.2188rem] w-full max-w-[90vw] my-0 mx-auto border-b-2 border-b-borderGray border-solid border-opacity-20'>
          <Image src={LogoRunway} width={160} height={24} />
        </div>
      ) : (
        // <div tw=''>
        <div
          className='navbar__arrow'
          tw=' pt-[38px] pb-[15px] pr-[6.2188rem] w-full max-w-[90vw] my-0 mx-auto flex gap-9 justify-start items-center'
        >
          <Image
            src={ArrowButton}
            width={77.78}
            height={77.78}
            className='arrow__style'
            onClick={() => router.back()}
          />
          {props.idea && (
            <div tw='  text-3xl  text-[#424242] font-semibold max-w-[84%] whitespace-nowrap overflow-hidden overflow-ellipsis'>
              {props.idea ?? ''}
            </div>
          )}
        </div>
        // </div>
      )}
    </>
  )
}

export default Navbar
