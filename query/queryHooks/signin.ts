import { useQuery } from 'react-query'
import { testServer } from '../queryFunction/signin'

export function useTestServer() {
  return useQuery(['testServer'], () => testServer(), {
    useErrorBoundary: (error: any) => error.response?.status >= 500,
  })
}
