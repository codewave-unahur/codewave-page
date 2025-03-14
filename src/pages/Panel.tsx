export default function Panel() {
  return (
    <>
      <header className="bg-gray-800 py-4 px-4 shadow-lg">
        <h1 className="text-md text-left text-gray-300 font-bold">
          Codewave - Panel de Administrador
        </h1>
      </header>
      <div className="bg-gray-900 min-h-screen py-4 px-4">
        <div className="flex space-x-4 mt-4">
          <nav className="w-1/4">
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
          <div className="flex-1">
            <div className="flex justify-end">
              <div className="flex items-center">
                <div className="mt-4">
                  <thead className="bg-gray-800 text-gray-300 font-bold">
                    <tr>
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Nombre</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Empresa</th>
                      <th className="px-4 py-2">Ver mensaje</th>
                      <th className="px-4 py-2">Visto</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 text-gray-400">
                    <tr>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Juan Pérez</td>
                      <td className="px-4 py-2">hola@hola.com</td>
                      <td className="px-4 py-2">Codewave</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:underline">
                          Ver
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">María López</td>
                      <td className="px-4 py-2">mlopez@gmail.com</td>
                      <td className="px-4 py-2">Codewave</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:underline">
                          Ver
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Pedro Gómez</td>
                      <td className="px-4 py-2"> hola@codewave.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">
                                Ver
                            </button>
                        </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Pedro Gómez</td>
                      <td className="px-4 py-2"> hola@codewave.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">
                                Ver
                            </button>
                        </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Pedro Gómez</td>
                      <td className="px-4 py-2"> hola@codewave.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">
                                Ver
                            </button>
                        </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Pedro Gómez</td>
                      <td className="px-4 py-2"> hola@codewave.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">
                                Ver
                            </button>
                        </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Pedro Gómez</td>
                      <td className="px-4 py-2"> hola@codewave.com</td>
                        <td className="px-4 py-2">Codewave</td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 hover:underline">
                                Ver
                            </button>
                        </td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-xl text-left text-gray-300 font-bold mb-2">
            Soporte
          </h3>
          <p className="text-gray-400">
            Si necesitas ayuda, puedes contactar con el soporte técnico.
          </p>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 px-4 shadow-lg mt-4">
        <p className="text-gray-400 text-center">
          © 2023 Codewave. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
