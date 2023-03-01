import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";

const SignUp = ({ ctx }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const isAuthenticated = !!parseCookies().token;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:1337/api/auth/local/register",
      {
        username,
        email,
        password,
      }
    );
    setCookie({}, "token", res.data.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    console.log(res);
  };

  if (isAuthenticated && ["/sign-up", "/sign-in"].indexOf(router.asPath) > -1) {
    if (typeof window !== "undefined") {
      router.push("/");
    } else {
      if (ctx.res) {
        ctx.res.writeHead(301, {
          Location: "/",
        });
        ctx.res.end();
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-lg rounded p-8">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="John Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// SignUp.getInitialProps = (ctx: any) => {
//   const router = useRouter();
//   const isAuthenticated = !!parseCookies(ctx).token;
//   // When the user is authenticated, don't let the user visit the
//   // sign-in and sign-up routes
//   if (isAuthenticated && ["/sign-up", "/sign-in"].indexOf(ctx.asPath) > -1) {
//     if (typeof window !== "undefined") {
//       router.push("/");
//     } else {
//       if (ctx.res) {
//         ctx.res.writeHead(301, {
//           Location: "/",
//         });
//         ctx.res.end();
//       }
//     }
//   }
//   return {};
// };

export default SignUp;
