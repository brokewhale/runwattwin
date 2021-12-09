import tw from 'twin.macro'
// import styles from '../components/Shell.module.css'
import Link from 'next/link'
import { Shell } from '../components'
import { Arrow } from '../components/icons'
import { Btn } from '../components/Btn'
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

          <Link href='/idea'>
            <a>
              <Btn>
                Begin <Arrow />
              </Btn>
            </a>
          </Link>
        </div>
      </Shell>
    </div>
  )
}

export default App
