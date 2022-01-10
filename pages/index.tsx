import tw from 'twin.macro'
// import styles from '../components/Shell.module.css'
import Link from 'next/link'
import { Shell } from '../components'
import { Arrow, GoogleIcon } from '../components/icons'
import { Btn } from '../components/Btn'
import { signIn, getProviders, signOut } from 'next-auth/react'
import { GetServerSideProps } from 'next'
// import { useTestServer } from '../query/queryHooks/signin'

interface IAppProps {
  status: boolean
  providers: any
}

const App = ({ providers }: IAppProps) => {
  // const { data: testServer, isSuccess } = useTestServer()

  // console.log('testServer', testServer)

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

          {/* {providers &&
            Object.values(providers).map((provider: any) => {
              if (provider.name === 'Google') {
                return (
                  <Btn key={provider.id}>
                    <div
                      tw='w-full h-full flex justify-center items-center gap-5'
                      onClick={e => {
                        e.preventDefault()
                        signIn()
                      }}
                    >
                      <GoogleIcon tw='w-[20px] h-[20px]' /> Begin <Arrow />
                    </div>
                  </Btn>
                )
              }
            })} */}

          <a
            href={`/api/auth/signin`}
            onClick={e => {
              e.preventDefault()
              signIn('google', {
                callbackUrl: 'http://localhost:3000/idea',
              })
            }}
          >
            <Btn>
              <div tw='w-full h-full flex justify-center items-center gap-5'>
                <GoogleIcon tw='w-[20px] h-[20px]' /> Begin <Arrow />
              </div>
            </Btn>
          </a>

          <div onClick={() => signIn()}>IN</div>
          <div onClick={() => signOut()}>OUT</div>
        </div>
      </Shell>
    </div>
  )
}

export default App

export const getServerSideProps: GetServerSideProps<{
  status: boolean
}> = async context => {
  const providers = await getProviders()

  return {
    props: {
      status: true,
      providers: providers,
    },
  }
}
