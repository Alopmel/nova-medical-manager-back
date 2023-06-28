function WhyYouNeed() {
    return (
      <div>
        <div className="z-10 bg-[#CFFDE1] bg-opacity-30 px-3 md:px-40 py-20 mx-auto max-w-[1240px] backdrop-blur-md ">
        <div class="text-center mx-auto lg:mb-20 max-w-[510px]">
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  ¿Por qué necesitas un Community Manager?
               </h2>
               <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
            </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">
  
            <div className="z-10 p-10 flex flex-col items-center text-center group md:border-r md:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-red-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">Razón 1</p>
              <p className="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic set of people.</p>
            </div>
  
            <div className="p-10 flex flex-col items-center text-center group md:border-r md:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-orange-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">Razón 2</p>
              <p className="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed.</p>
            </div>
  
            <div className="p-10 flex flex-col items-center text-center group md:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V2m0 4h4m-4 0H8m0 0V2m0 4v4m0 8v4m0-4h4m-4 0H8m4 0v4m0-4h4m-4 0H8m4 0v4"></path>
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">Razón 3</p>
              <p className="mt-2 text-sm text-slate-500">We build well rounded personalities, not just brilliant students.</p>
            </div>
  
          </div>
  
          <div className="w-full bg-[#4d6d6d] py-10 px-20 flex justify-between items-center">
            <p className="text-white">
              <span className="text-4xl font-medium">Aún tienes dudas?</span> <br />
              <span className="text-lg">Agenda una llamada !</span>
            </p>
            <button className="px-5 font-medium bg-fed049 hover:bg-fcbe08 text-[#0f0f0f] w-[250px] rounded-md my-6 mx-auto md:mx-0 py-3">LLÁMANOS</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default WhyYouNeed;