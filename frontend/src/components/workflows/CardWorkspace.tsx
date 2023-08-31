const CardWorkspace = () => {
    return(
        <div className="px-12 py-6 w-full border-b border-b-white/40 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
                {/* <img src="" alt="" className="rounded-full"/> */}
                <div className="h-16 w-16 bg-gray-500/30 rounded-full"></div>
                <div className="text-secundary-color">
                    <h3 className="font-semibold">Nombre espacio de trabajo</h3>
                    <span className="font-thin">Tu + 15 miembros</span>
                </div>
            </div>
            <button className="bg-secundary-color text-white rounded-lg px-10 py-2">Iniciar conexion</button>
        </div>
    )
}
export default CardWorkspace;
