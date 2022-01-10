import { AppProps } from 'next/app'
import GlobalStyles from './../styles/GlobalStyles'
import '../styles/Styles.css'
import { SessionProvider } from 'next-auth/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <div>
      <SessionProvider
        // Provider options are not required but can be useful in situations where
        // you have a short session maxAge time. Shown here with default values.
        session={pageProps.session}
      >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <GlobalStyles />
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </div>
  )
}

export default App
