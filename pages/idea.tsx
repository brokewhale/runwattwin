import * as React from 'react'
import { Shell } from '../components'
import 'twin.macro'
import Link from 'next/link'
import useGlobalState from '../store/global'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signIn, signOut, useSession } from 'next-auth/react'
import { getCookies, setCookies, removeCookies } from 'cookies-next'
import { updateCookie } from '../query/queryFunction/signin'
interface IIdeaProps {
  idea: string
}

const Idea: React.FunctionComponent<IIdeaProps> = props => {
  const router = useRouter()

  const { updateUserIdea } = useGlobalState()
  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<IIdeaProps> = data => {
    updateUserIdea(data.idea)
    router.push('/chat')
  }
  const { data: session, status } = useSession()
  console.log('session', session)

  return (
    <Shell variant='button' withBg='button'>
      <div
        tw='max-w-[578.53px] flex justify-center items-start flex-col gap-10 pt-[66.2px] break-xsmobile:(pt-[57.22px] gap-5) '
        className='idea__header'
      >
        <div tw='text-[70px] text-[#121619] leading-[90px] font-semibold break-xsmobile:(text-[30px] leading-[140%])'>
          The Idea
        </div>
        <div tw='text-[#424242] text-[20px] leading-[150%] font-normal max-w-[454.91px] mb-2.5 pl-2.5 break-xsmobile:(text-[16px] mb-1 max-w-[289.14px])  '>
          An idea can be anything, the goal is to keep it simple so we can help
          you begin the exciting journey of creating an amazing product.
        </div>

        <form tw='max-w-[599px]  w-full' onSubmit={handleSubmit(onSubmit)}>
          <textarea
            id='idea'
            tw='w-full h-full resize-none max-w-[599px] 
            max-h-[235px]rounded-[6px] bg-[#FFFFFF] text-[#424242] text-[20px] leading-[150%] placeholder:text-[#B9B9B9] 
            text-[30px] leading-[38px] p-7 mb-5  break-xsmobile:(text-[16px] leading-[150%] placeholder:text-[16px] p-4)'
            placeholder='Input your idea'
            {...register('idea', { required: true })}
          ></textarea>

          <div tw='flex justify-end'>
            <button tw='w-[141px] h-[64px] text-[18px] leading-6 font-medium flex justify-center items-center gap-5 bg-buttonBlue  rounded-[7.19697px] cursor-pointer break-xsmobile:(w-full h-[60px] text-[16px])'>
              Hand-in
            </button>
          </div>
          <div onClick={() => signOut()}>OUT</div>
          <div onClick={() => setCookies('key', 'value')}>cookie</div>
        </form>
      </div>
    </Shell>
  )
}

export default Idea
