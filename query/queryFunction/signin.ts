import axios from 'axios'
import { baseUrl } from '../../config/keys'

console.log(baseUrl)

export const testServer = async () => {
  const { data } = await axios.get(`${baseUrl}/test`, {
    headers: {
      accept: '*/*',
    },
  })

  return data
}

interface userPayload {
  google_id: string
  name: string
  email: string
}

// interface payload {
//   details: userPayload
// }
export const enter = async (details: userPayload) => {
  const { data } = await axios.post(`${baseUrl}/register`, details, {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  })

  return data
}
interface cookieData {
  token: string
}

export const updateCookie = async (details: cookieData) => {
  const { data } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/examples/savecookie`,
    details,
    {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    },
  )

  return data
}
