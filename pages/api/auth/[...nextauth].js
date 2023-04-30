import NextAuth from "next-auth";
import { compare } from 'bcryptjs';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/connect";
import User from "../../../model/Schema";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                console.log('ASHUTOSH -  CRED - ', credentials);
                connectMongo().catch(error => { console.log(error); throw new Error("Connection failded!") });

                // check user existance
                const result = await User.findOne( { email : credentials.email});
                console.log(result);
                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                // compare()
                const checkPassword = await compare(credentials.password, result.password);
                console.log('Checked pass  - ', checkPassword);
                
                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("Username or Password doesn't match");
                }

                return result;

            }
        }),
    ],
    secret: 't3Aw+oVs9AuYZtq+DGbVLKi5+Ev8H/0Hl8FR9E0lcs8=',
    session: {
        strategy: 'jwt',
    }
});

