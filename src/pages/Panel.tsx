import React from 'react'

export default function Panel() {

  return (
    <>
        <header className="bg-gray-800 py-4 px-4 shadow-lg">
            <h1 className="text-md text-left text-gray-300 font-bold">Codewave - Panel de Administrador</h1>
        </header>
        <div className="bg-gray-900 min-h-screen py-4 px-4">
            <h2 className="text-2xl text-left text-gray-300 font-bold mb-4">Bienvenido al Panel de Administrador</h2>
            <p className="text-gray-400">Aquí puedes gestionar y administrar el contenido de tu aplicación.</p>
            <div className="mt-4">
                <h3 className="text-xl text-left text-gray-300 font-bold mb-2">Secciones</h3>
                <ul className="list-disc list-inside text-gray-400">
                    <li>Usuarios</li>
                    <li>Contenido</li>
                    <li>Configuraciones</li>
                </ul>
            </div>
            <div className="mt-4">
                <h3 className="text-xl text-left text-gray-300 font-bold mb-2">Acciones</h3>
                <ul className="list-disc list-inside text-gray-400">
                    <li>Agregar Usuario</li>
                    <li>Eliminar Contenido</li>
                    <li>Actualizar Configuraciones</li>
                </ul>
            </div>
            <div className="mt-4">
                <h3 className="text-xl text-left text-gray-300 font-bold mb-2">Estadísticas</h3>
                <p className="text-gray-400">Aquí puedes ver las estadísticas de la aplicación.</p>
                <ul className="list-disc list-inside text-gray-400">
                    <li>Usuarios Activos</li>
                    <li>Contenido Publicado</li>
                    <li>Configuraciones Actualizadas</li>
                </ul>
            </div>
            <div className="mt-4">
                <h3 className="text-xl text-left text-gray-300 font-bold mb-2">Soporte</h3>
                <p className="text-gray-400">Si necesitas ayuda, puedes contactar con el soporte técnico.</p>
            </div>
        </div>
        <footer className="bg-gray-800 py-4 px-4 shadow-lg mt-4">
            <p className="text-gray-400 text-center">© 2023 Codewave. Todos los derechos reservados.</p>
        </footer>
    

        

    </>
  )
}