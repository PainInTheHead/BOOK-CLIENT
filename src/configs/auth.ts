import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
var jwt = require("jsonwebtoken");

const secret = process.env.NEXTAUTH_SECRET;

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = {
          email: "ibragin@sfedu.ru",
          password: "ibragin@sfedu.ru",
          id: "1",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZK4YnjXXPv-qE495K6XT1L5bSxoFkWrz06Q&usqp=CAU",
          name: "Guest",
        };

        if (user && user.password === credentials.password) {
          const { password, ...userWhithoutPass } = user;

          return userWhithoutPass as User;
        }
        return null;
      },
    }),
  ],
  // session: {

  //   strategy: "jwt",
  // },
  // jwt: {

  //   secret: secret,

  //   encode: async ({ secret, token }) => {

  //     const encodedToken = jwt.sign(
  //       {
  //         ...token,

  //       },
  //       secret,
  //       {
  //         algorithm: 'HS256',
  //         expiresIn: 60 * 60,
  //       }
  //     );
  //     return encodedToken;
  //   },

  //   decode: async ({ secret, token }) => {

  //     const decodedToken = jwt.verify(token, secret);
  //     return decodedToken;
  //   },
  // },
  pages: {
    signIn: "/authorization/login",
  },
};
