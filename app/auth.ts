import NextAuth from 'next-auth';
import { authConfig } from './authconfig';
import Credentials from 'next-auth/providers/credentials';

import { connectToDB } from './library/utils';
import { Users } from './library/models';
 
const login  = async (credentials:any) =>{

    try {

        connectToDB()

        const user = await Users.findOne({username:credentials.username})

        if(!user) throw new Error("Wrong Crednetials");

        const isPasswordCorrect = await Users.findOne({password:credentials.password})

        if(!isPasswordCorrect) throw new Error("Wrong Crednetials");

        const checkActive = await Users.find({username:credentials.username, password:credentials.password, isActive: true})

        if (checkActive?.length == 0) throw new Error("Wrong Crednetials");

        return user;

    } catch (error) {
        console.log("Failed to login!")
    }

}


console.log(NextAuth);


export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
            const user = await login(credentials);
            return user;
        } catch (error) {
            return null
        }

      },
    }),
  ],
  callbacks:{
    async jwt({token, users}:any) {
        if(users){
            token.username = users.username;
        }
        return token;
    },
    async session({session, token}:any) {
        if(token){
            session.username = token.username;
        }
        return session;
    }
  }
});