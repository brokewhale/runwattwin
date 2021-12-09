import tw from 'twin.macro'
// import styles from '../components/Shell.module.css'

import { Shell } from '../components'
import { Arrow } from '../components/icons'
const App = () => {
  return (
    <div>
      <Shell variant='main' withBg='main'>
        <div tw='max-w-[578.53px] flex justify-center items-start flex-col gap-4 pt-[146.77px] break-xsmobile:pt-[50px] gap-6'>
          <div tw='text-[#121619] text-[50px] leading-[140%] font-semibold break-xsmobile:text-[30px]'>
            The path to building an idea into a start-up
          </div>
          <div tw='text-[#424242] text-[20px] leading-[150%] font-normal max-w-[454.91px] mb-9 pl-2.5 break-xsmobile:text-[16px] mb-3.5'>
            With our super interactive platform, we literally make the best out
            of your most casual ideas.
          </div>
          <div tw='w-[250px] h-[85px] text-[18px] leading-6 font-medium flex justify-center items-center gap-5 bg-buttonBlue  rounded-[7.19697px] cursor-pointer break-xsmobile:w-[158px] h-[60px] text-[16px]'>
            Begin <Arrow />
          </div>
        </div>
      </Shell>
    </div>
  )
}

export default App
