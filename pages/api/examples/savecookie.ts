import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let form_data = req.body

  let cookieData = {
    isAuth: true,
  }
  setCookies('server-key', 'value', { req, res, maxAge: 60 * 60 * 24 })
  console.log('form_data', form_data)

  res.statusCode = 200

  res.json({ success: true, data: cookieData })
}
