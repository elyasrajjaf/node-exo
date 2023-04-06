import { useState } from "react";
import Alert from "../components/Alert";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { alert, setAlert } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello world!");
    setAlert({
      message: "Hello world!",
      type: "success",
    });
  };

  return (
    <div className="mt-10 p-4 flex justify-center">
      <form className="bg-gray-100 rounded-xl p-10 shadow-md w-1/3" onSubmit={handleSubmit}>
        {alert.message && <Alert message={alert.message} type={alert.type} />}
        <h1 className="text-center font-medium text-2xl pb-5">Page de connexion</h1>
        <div className="p-5 flex gap-5 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <input
            className="w-full rounded-md py-2 px-4"
            placeholder="adressemail@mail.fr"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="p-5 flex gap-5 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <input
            className="w-full rounded-md py-2 px-4"
            placeholder="********"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="cursor-pointer text-center py-2 px-4 bg-blue-700  hover:bg-blue-800 transition-colors mx-auto mt-4 mb-10 rounded-md text-white w-1/2">
          <button type="submit">Se connecter</button>
        </div>
        <div className="text-gray-500 text-sm text-center">
          <p>
            Vous n'avez pas de compte ?{" "}
            <NavLink to="/register" className="cursor-pointer text-blue-700">
              S'inscrire
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
