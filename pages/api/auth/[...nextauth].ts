import NextAuth, { SessionStrategy } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import { enter, updateCookie } from '../../../query/queryFunction/signin'
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'

import { NextApiRequest, NextApiResponse } from 'next/types'

const options = (req: NextApiRequest, res: NextApiResponse) => ({
  // https://next-auth.js.org/configuration/providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    strategy: 'jwt' as SessionStrategy,
  },

  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
  },

  pages: {
    signIn: '/', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    error: '/', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account) {
        setCookies('server-key', 'value', { req, res, maxAge: 60 * 60 * 24 })

        let details = {
          name: user?.name,
          google_id: user?.id,
          email: user?.email,
        }
        try {
          const response = await enter(details)
          token.access_token = response.token
        } catch (error) {
          console.log(error)
        }
      }
      return token
    },
  },

  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
})

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options(req, res))
