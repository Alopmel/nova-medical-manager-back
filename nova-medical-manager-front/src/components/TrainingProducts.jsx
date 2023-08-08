
function TrainingProducts() {
  return (
    <div className="flex items-center justify-center flex-col bg-white max-w-[1240px] mx-auto">
        <div className="bg-white p-10 rounded-xl">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 text-fed049">No pierdas más tiempo y toma la delantera en el mundo digital con nuestros cursos personalizados.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center mt-10">
                <div className="bg-[#FFFBEC]">
                    <div className="flex flex-col p-8  bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" className="w-8"/>
                        <div className="mt-3 font-semibold text-lg">Copy Writer</div>
                        <div className="text-sm font-light">Desbloquea tu potencial como <br />CopyWriter</div>
                        <div className="my-4">
                            <span className="font-bold text-base">59€</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Comprar
                        </button>
                    </div>
                </div>

                <div className="bg-[#F9ECFF] ">
                    <div className="flex flex-col p-8  bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp" className="w-12"/>
                        <div className="mt-3 font-semibold text-lg">Branding</div>
                        <div className="text-sm font-light w-60 md:w-auto">Diferencia y crea tu marca personal</div>
                        <div className="my-4">
                            <span className="font-bold text-base">35€</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Comprar
                        </button>
                    </div>
                </div>


                <div className="bg-[#ECEEFF]">
                    <div className="flex flex-col p-8  bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png" className="w-12"/>
                        <div className="mt-3 font-semibold text-lg">Instagram</div>
                        <div className="text-sm font-light w-60 md:w-auto">Eleva tu negocio en Instagram con nuestro curso especializado.</div>
                        <div className="my-4">
                            <span className="font-bold text-base">65€</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Comprar
                        </button>
                    </div>
                </div>

                <div className="bg-[#d9f8e6]">
                    <div className="flex flex-col p-8 bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png" className="w-12"/>
                        <div className="mt-3 font-semibold text-lg">Canva</div>
                        <div className="text-sm font-light w-60 md:w-auto">
                            Crea contenido visual impactante con nuestro curso de Canva .</div>
                        <div className="my-4">
                            <span className="font-bold text-base">65€</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainingProducts
