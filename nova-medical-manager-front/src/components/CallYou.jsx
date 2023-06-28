import callme from '../assets/img/callme.jpg'

function CallYou() {
  return (
    <section>
      <div >
        <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 p-8">
            <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">Contacta Conmigo!</p>
            <p className="text-sm md:text-base leading-snug text-opacity-100">
              Por favor, deja tus datos y en qué puedo ayudarte y te llamaré!
            </p>
            
          </div>
          <div className="flex flex-col w-full lg:w-2/3 justify-center">
            <div className="container w-full px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-7/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-white">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl mb-4 text-black font-semibold">Have a suggestion?</h4>
                      <form id="feedbackForm" action="" method="">
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="border border-fed049 px-3 py-3 text-sm shadow w-full  placeholder-black text-gray-800 outline-none focus:bg-gray-100"
                            placeholder=" "
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">Teléfono</label>
                          <input
                            type="phone"
                            name="phone"
                            id="phone"
                            className="border border-fed049 px-3 py-3 text-sm shadow w-full  placeholder-black text-gray-800 outline-none focus:bg-gray-100"                            placeholder=" "
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">¿En qué puedo ayudarte?</label>
                          <textarea
                            maxLength="300"
                            name="feedback"
                            id="feedback"
                            rows="4"
                            cols="80"
                            className="border border-fed049 px-3 py-3 text-sm shadow w-full  placeholder-black text-gray-800 outline-none focus:bg-gray-100"                            placeholder=""
                            required
                          ></textarea>
                        </div>
                        <div className="text-center mt-6">
                         
                          <button
                            id="feedbackBtn"
                            className="bg-fed049 hover:bg-fcbe08 text-[#0f0f0f] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
                            type="submit"
                            style={{ transition: "all 0.15s ease 0s" }}
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallYou;