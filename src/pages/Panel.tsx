import { useState, useEffect } from "react";

export default function Panel() {

    const [open, setOpen] = useState(false);
    const [contactos, setContactos] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/contactos");
            const data = await response.json();
            setContactos(data);
        };
        fetchData();
    }
    , []);



    const handleOpen = () => {
        setOpen(!open);
    }


  return (
    <>
      <header className="bg-gray-800 py-4 px-4 shadow-lg">
        <h1 className="text-md text-left text-gray-300 font-bold">
          Codewave - Panel de Administrador
        </h1>
      </header>
          <div className="bg-gray-900 min-h-screen py-4 px-4">
      <div className="grid grid-cols-4 gap-4 mt-4">
                <nav className="col-span-1 p-4 rounded-lg flex-shrink-0">
                  <h3 className="text-xl text-left text-gray-300 font-bold mb-2">
                    Navegación
                  </h3>
                  <ul className="space-y-2 text-gray-300 font-bold text-sm">
                    <li>
                      <a href="#" className="hover:underline">
                        Recibidos
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </nav>
        <div className="col-span-3">
          <div className="flex">
            <div className="flex items-center">
              <div className="mt-4">
                <thead className="bg-gray-800 text-gray-300 font-bold">
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Fecha</th>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Empresa</th>
                    <th className="px-4 py-2">Ver mensaje</th>
                    <th className="px-4 py-2">Visto</th>
                    <th className="px-4 py-2">Eliminar</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 text-gray-400">
                  <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">01/10/2020</td>
                    <td className="px-4 py-2">Juan Pérez</td>
                    <td className="px-4 py-2">hola@hola.com</td>
                    <td className="px-4 py-2">Codewave</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline" onClick={handleOpen}>Ver</button>
                    </td>
                    <td className="px-4 py-2"> </td>
                        <td className="px-4 py-2">
                            <button className="text-red-500 hover:underline">Eliminar</button>
                        </td>
                  </tr>
                  {open && ( 
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                      <div className="bg-gray-900 rounded-lg p-4 w-1/2">
                        <h2 className="text-lg text-gray-300 font-bold mb-2">Mensaje de Juan Pérez</h2>
                        <p className="text-gray-400 mb-4">Hola, soy Juan Pérez y estoy interesado en sus servicios.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleOpen}>Cerrar</button>
                      </div>
                    </div>
                  )}
                  <tr>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">02/10/2020</td>
                    <td className="px-4 py-2">María López</td>
                    <td className="px-4 py-2">mlopez@gmail.com</td>
                    <td className="px-4 py-2">Codewave</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline">Ver</button>
                    </td>
                    <td className="px-4 py-2"> </td>
                        <td className="px-4 py-2">
                            <button className="text-red-500 hover:underline">Eliminar</button>
                        </td>
                  </tr>
                    <tr>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">03/10/2020</td>
                        <td className="px-4 py-2">Pedro González</td>
                        <td className="px-4 py-2"> pedro@gonzalez.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">Ver</button>
                        </td>
                        <td className="px-4 py-2"> </td>
                        <td className="px-4 py-2">
                            <button className="text-red-500 hover:underline">Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">03/10/2020</td>
                        <td className="px-4 py-2">Pedro González</td>
                        <td className="px-4 py-2"> pedro@gonzalez.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">Ver</button>
                        </td>
                        <td className="px-4 py-2"> </td>
                        <td className="px-4 py-2">
                            <button className="text-red-500 hover:underline">Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">03/10/2020</td>
                        <td className="px-4 py-2">Pedro González</td>
                        <td className="px-4 py-2"> pedro@gonzalez.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">Ver</button>
                        </td>
                        <td className="px-4 py-2"> </td>
                        <td className="px-4 py-2">
                            <button className="text-red-500 hover:underline">Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">03/10/2020</td>
                        <td className="px-4 py-2">Pedro González</td>
                        <td className="px-4 py-2"> pedro@gonzalez.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">Ver</button>
                        </td>
                        <td className="px-4 py-2"> </td>
                        <td className="px-4 py-2">
                            <button className="text-red-500 hover:underline">Eliminar</button>
                        </td>
                    </tr>
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
