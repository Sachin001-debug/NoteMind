import { X, LogIn } from "lucide-react";
import { useState } from "react";

const Home = () => {
  // fields
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const [formPopup, setFormPopup] = useState(false);

  const [currentState, setCurrentState] = useState("login");

  const openForm = () => setFormPopup(true);
  const closeForm = () => setFormPopup(false);

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* LOGO */}
            <div className="text-2xl md:text-3xl font-bold text-[#fa4e0a]">
              NoteMind-AI
            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={openForm}
              className="flex cursor-pointer items-center gap-2 px-5 py-2 rounded-full bg-[#fa4e0a] text-white font-semibold shadow-md hover:shadow-lg"
            >
              <LogIn size={16} />
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* POPUP FORM */}
      {formPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <form className="relative w-[90%] max-w-sm bg-white rounded-xl p-6 shadow-lg flex flex-col gap-3">
            <button
              type="button"
              onClick={closeForm}
              className="absolute top-3 right-3"
            >
              <X className="cursor-pointer" size={22} />
            </button>

            <h2 className="text-2xl font-bold text-red-600 mb-2">
              {currentState === "login" ? "Login" : "Signup"}
            </h2>

            {currentState === "signup" && (
              <>
                <label>Name:</label>
                <input
                  className="border-1 border-gray-700 p-2 rounded focus:ring-1 focus:ring-[#fa4e0a] outline-none"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            )}

            <label>Email:</label>
            <input
              className="border-1 border-gray-700 p-2 rounded focus:ring-1 focus:ring-[#fa4e0a] outline-none"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <label>Password:</label>
            <input
              className="border border-gray-700 p-2 rounded focus:ring-1 focus:ring-[#fa4e0a] outline-none"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="mt-3 bg-[#fa4e0a] text-white p-2 rounded">
              Submit
            </button>

            {currentState === "login" ? (
              <div className="text-center">
                Don't have an account yet?{" "}
                <span
                  onClick={() => setCurrentState("signup")}
                  className="text-red-500 cursor-pointer"
                >
                  Register
                </span>{" "}
                here
              </div>
            ) : (
              <div className="text-center">
                Alredy have an account ?{" "}
                <span
                  onClick={() => setCurrentState("login")}
                  className="text-red-500 cursor-pointer"
                >
                  Login
                </span>{" "}
                here
              </div>
            )}
          </form>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="hero-bg">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-[#ebd405]">NoteMind-AI</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-10">
            Empowering your journey with purpose and positivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#fa4e0a] text-white rounded-xl">
              Get Started
            </button>

            <button className="px-8 py-3 border text-[#fa4e0a] rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
