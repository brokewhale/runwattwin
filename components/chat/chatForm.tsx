import React from 'react'
import 'twin.macro'
import TextareaAutosize from 'react-textarea-autosize'
interface Props {}

const ChatForm = (props: Props) => {
  return (
    <form tw='w-full flex gap-2.5'>
      {/* <textarea
        id='chat'
        tw='w-full h-full resize-none max-w-[817] 
            min-h-[64px]rounded-[6px] bg-[#FFFFFF] text-[#424242] text-[16px] leading-[20px] placeholder:(text-[#B9B9B9] 
            text-[16px] leading-[20px]) p-2.5  break-xsmobile:(text-[16px] leading-[150%] placeholder:text-[16px] p-4)'
        placeholder='Type here..'
      ></textarea> */}
      <TextareaAutosize
        tw='w-full h-full resize-none max-w-[817] 
       min-h-[64px]rounded-[6px] bg-[#FFFFFF] text-[#424242] text-[16px] leading-[20px] placeholder:(text-[#B9B9B9] 
       text-[16px] leading-[20px]) p-2.5  break-xsmobile:(text-[16px] leading-[150%] placeholder:text-[16px] p-4)'
        maxRows={4}
        placeholder='Type here..'
      />

      <div tw='flex items-end'>
        <button tw='w-[118px] h-[64px] text-[18px] leading-6 font-medium flex justify-center items-center gap-5 bg-buttonBlue  rounded-[7.19697px] cursor-pointer break-xsmobile:(w-full h-[60px] text-[16px])'>
          Send
        </button>
      </div>
    </form>
  )
}

export default ChatForm
