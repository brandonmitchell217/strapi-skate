import React from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  async function authenticateUser(email: string, password: string) {
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        return data.user;
      } else {
        throw new Error(data.message[0].messages[0].message);
      }
    } catch (error) {
      throw error;
    }
  }

  const handleSubmit = async () => {
    //  e.preventDefault();
    try {
      const user = await authenticateUser(email, password);
      setCookie(null, "user", JSON.stringify(user), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className={`p-6 h-full w-full flex flex-col gap-4`}>
        <label className="text-gray-600 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 p-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <label className="text-gray-600 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 p-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
