import { useState, useEffect } from "react";
import axios from "axios";
import { BsCheck, BsX } from "react-icons/bs";


export default function Panel() {

    const [open, setOpen] = useState(false);
    const [contactos, setContactos] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect (() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost.com:5000/contactos");
            const data = response.data;
            console.log(data);
            setContactos(data);
        };
        fetchData();
        console.log(contactos);
    }
    , []);



    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    const handleOpen = () => {
        setOpen(!open);
    }


  return (
    <>
      <header
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-neutral-900"
        } py-4 px-4 shadow-lg`}
      >
        <div className="flex justify-between items-center">
          <h1
            className={`text-md text-left ${
              isDarkMode ? "text-gray-300" : "text-gray-100"
            } font-bold`}
          >
            Codewave - Panel de Administrador
          </h1>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handleDarkMode}
            />
            <div
              className={`relative w-11 h-6 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } peer-focus:outline-none peer-focus:ring-4 ${
                isDarkMode
                  ? "peer-focus:ring-gray-800"
                  : "peer-focus:ring-blue-300"
              } rounded-full peer ${
                isDarkMode ? "dark:bg-gray-700" : ""
              } peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                isDarkMode ? "dark:border-gray-600" : ""
              } ${isDarkMode ? "peer-checked:bg-gray-500" : "peer-checked:bg-blue-600"}`}
            ></div>
            <span
              className={`ms-3 text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-100"
              }`}
            >
              Modo oscuro
            </span>
          </label>
        </div>
      </header>

      <div
        className={`${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        } min-h-screen py-4 px-4`}
      >
        <div className="grid grid-cols-4 gap-4 mt-4">
          <nav
            className={`col-span-1 p-4 rounded-lg flex-shrink-0 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3
              className={`text-xl text-left ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } font-bold mb-2`}
            >
              Navegación
            </h3>
            <ul className="space-y-2 font-bold text-sm">
              <li>
                <a
                  href="#"
                  className={`hover:underline ${
                    isDarkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  Recibidos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:underline ${
                    isDarkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-span-3">
            <div className="flex">
              <div className="flex items-center">
                <div className="mt-4">
                  <thead
                    className={`${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    } font-bold`}
                  >
                    <tr>
                      <th
                        className={`px-4 py-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        ID
                      </th>
                      <th
                        className={`px-4 py-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        Fecha
                      </th>
                      <th
                        className={`px-4 py-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        Nombre
                      </th>
                      <th
                        className={`px-4 py-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        Email
                      </th>
                      <th
                        className={`px-4 py-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        Empresa
                      </th>
                      <th
                        className={`px-4 py-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        Ver mensaje
                      </th>
                      <th
                        className={`px-4 py-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        Visto
                      </th>
                      <th
                        className={`px-4 py-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        Eliminar
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={`${
                      isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    
                    <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">01/10/2020</td>
                    <td className="px-4 py-2">Juan Pérez</td>
                    <td className="px-4 py-2">hola@hola.com</td>
                    <td className="px-4 py-2">Codewave</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline" onClick={handleOpen}>Ver</button>
                    </td>
                    <td className="px-4 py-2 flex justify-center items-center"><BsCheck className="text-green-400 text-2xl" /></td>
                        <td className="px-4 py-2">
                            <button className="text-red-500 hover:underline">Eliminar</button>
                        </td>
                  </tr>
                    {open && (
                      <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50">
                        <div
                          className={`${
                            isDarkMode ? "bg-gray-900" : "bg-white"
                          } rounded-lg p-4 w-1/2`}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h2
                              className={`text-lg ${
                                isDarkMode ? "text-gray-300" : "text-gray-800"
                              } font-bold mb-2`}
                            >
                              Mensaje de Juan Pérez - ID #231
                            </h2>
                            <h3
                              className={`text-sm ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              01/10/2020
                            </h3>
                          </div>
                          <div className="flex flex-col items-start">
                            <p
                              className={`${
                                isDarkMode ? "text-gray-400" : "text-gray-800"
                              } mb-2`}
                            >
                              Nombre: Juan Pérez
                            </p>
                            <p
                              className={`${
                                isDarkMode ? "text-gray-400" : "text-gray-800"
                              } mb-2`}
                            >
                              Email: perez@juan.com
                            </p>
                            <p
                              className={`${
                                isDarkMode ? "text-gray-400" : "text-gray-800"
                              } mb-2`}
                            >
                              Empresa: Codewave
                            </p>
                            <p
                              className={`${
                                isDarkMode ? "text-gray-400" : "text-gray-800"
                              } mb-2`}
                            >
                              Teléfono: 123456789
                            </p>
                            <p
                              className={`${
                                isDarkMode ? "text-gray-400" : "text-gray-800"
                              } mb-2`}
                            >
                              Mensaje:
                            </p>
                            <p
                              className={`${
                                isDarkMode ? "text-gray-400" : "text-gray-800"
                              } mb-4`}
                            >
                              Hola, soy Juan Pérez y estoy interesado en sus servicios.
                            </p>
                            <button
                              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                              onClick={handleOpen}
                            >
                              Cerrar
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
