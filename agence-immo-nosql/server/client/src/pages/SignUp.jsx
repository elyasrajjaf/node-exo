import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

import Alert from "../components/Alert";

export default function SingUp() {
  const [utilisateur, setUtilisateur] = useState({
    email: "",
    password: "",
    civilite: "0",
    nom: "",
    prenom: "",
    telephone: "",
  });

  const { alert, setAlert, data, setData } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (data.message === "User created") {
      setTimeout(() => {
        setUtilisateur({});
        setAlert({});
        navigate("/login");
      }, 1500);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUtilisateur({ ...utilisateur, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Hello world!");

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: utilisateur.email,
          password: utilisateur.password,
          civilite: utilisateur.civilite,
          firstname: utilisateur.nom,
          lastname: utilisateur.prenom,
          phone: utilisateur.telephone,
        }),
      };

      const res = await fetch("http://localhost:8081/api/users/register", requestOptions);

      const apiData = await res.json();

      setData(apiData);

      if (res.status === 201) {
        setAlert({
          message: "Inscription réussie",
          type: "success",
        });
      } else {
        setAlert({
          message: "Erreur lors de l'inscription",
          type: "error",
        });
      }
    } catch (error) {
      setAlert({
        message: "Erreur lors de l'inscription",
        type: "error",
      });
    }
  };

  return (
    <div className="mt-10 p-4 flex justify-center">
      <form className="bg-gray-100 rounded-xl p-10 shadow-md w-1/3" onSubmit={handleSubmit}>
        {alert.message && <Alert message={alert.message} type={alert.type} />}
        <h1 className="text-center font-medium text-2xl pb-5">Page d'inscription</h1>
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <select
            name="civilite"
            id="civilite"
            className="w-full rounded-md py-2 px-4"
            onChange={handleChange}
          >
            <option value="0">Civilité</option>
            <option value="mr">Monsieur</option>

            <option value="mme">Madame</option>
          </select>
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
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>

          <input
            className="w-full rounded-md py-2 px-4"
            placeholder="Doe"
            type="text"
            name="nom"
            id="nom"
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
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>

          <input
            className="w-full rounded-md py-2 px-4"
            placeholder="John"
            type="text"
            name="prenom"
            id="prenom"
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
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <input
            className="w-full rounded-md py-2 px-4"
            placeholder="06 12 34 56 78"
            type="tel"
            name="telephone"
            id="telephone"
            onChange={handleChange}
          />
        </div>
        <div className="cursor-pointer text-center py-2 px-4 bg-blue-700  hover:bg-blue-800 transition-colors mx-auto mt-4 mb-10 rounded-md text-white w-1/2">
          <button type="submit">S'inscrire</button>
        </div>
        <div className="text-gray-500 text-sm text-center">
          <p>
            Vous avez déjà un compte ?{" "}
            <NavLink to="/login" className="cursor-pointer text-blue-700">
              Se connecter
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
