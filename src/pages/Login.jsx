import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-black text-white">
      <form className="w-full max-w-sm bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center">
           <span className="text-spotify-green">Insura</span> Login
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-spotify-green"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm mb-2 text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-spotify-green"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-spotify-green text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{" "}
          <Link to={'/signin'} className="text-spotify-green cursor-pointer hover:underline">
            Sign in
          </Link >
        </p>
      </form>
    </div>
  )
}

export default Login
