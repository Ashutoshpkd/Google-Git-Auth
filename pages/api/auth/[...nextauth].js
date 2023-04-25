import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    // session: {
    //     // Set a custom session cookie name
    //     name: 'myapp.session',
    //     // Use JSON Web Tokens (JWTs) to store session data
    //     jwt: true,
    //     // Use secure cookies in production
    //     secure: false,
    // },
    // cookies: {
    //     // Use a custom cookie name for the CSRF token
    //     csrfToken: 'myapp.csrf',
    //     // Use secure cookies in production
    //     secure: false,
    // }
});

