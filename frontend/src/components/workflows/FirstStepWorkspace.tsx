const FirstStepWorkspace = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-background">
      <div className="w-2/5 flex flex-col gap-y-8">
        <div className="text-white flex flex-col gap-y-3">
          <h3 className="w-3/4 font-semibold text-3xl">¿Cual es el nombre de su empresa o equipo?</h3>
          <p>
            Este sera el nombre de su nuevo espacio de trabajo. Elige un nombre que su
            equipo reconozca.
          </p>
        </div>
        <form className="flex flex-col gap-y-3">
          <input className="w-1/2 px-3 py-1 rounded-lg bg-white border-2 border-[#BECCFF] text-text-workspace" type="text" />
          <button className="w-fit px-8 py-2 bg-secundary-color text-white rounded-md" type="submit">Siguiente</button>
        </form>
      </div>
    </section>
  )
}
export default FirstStepWorkspace;
