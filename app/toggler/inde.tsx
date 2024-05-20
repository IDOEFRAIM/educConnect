import React from 'react'

const inde = () => {
  const shit= `import {NextAuthOptions} from 'next-auth'
  import CredentialsProvider from "next-auth/providers/credentials";
  import {PrismaAdapter} from '@next-auth/prisma-adapter'
  import { db } from './db';
  import axios from 'axios';
  export const authOptions:NextAuthOptions = {
      adapter:PrismaAdapter(db),
      session:{
          strategy:'jwt'
      },
      pages:{
          signIn:'/auth/login',
          newUser: '/dashboard/profile'
      },
      secret:process.env.JWT_SECRET,
      providers:[
          CredentialsProvider({
              name: "Credentials",
              credentials: {
                email: { label: "email", type: "email", placeholder: "@" },
                password: { label: "password", type: "password" }
              },
              async authorize(credentials) {
                  return axios
            .post(`${process.env.NEXT_PUBLIC_STRAPI_API}/auth/login`, {
              email: credentials.email,
              password: credentials.password,
            })
            .then((response) => {
              return response.data;
            })
            .catch((error) => {
              console.log(error.response);
              throw new Error(error.response.data.message);
            }) || null;
              }
            })
      ]
  }`
  return (
    <div>
      5
    </div>
  )
}

export default inde
