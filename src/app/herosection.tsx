export default function Herosection(){
    return(
    <section className="bg-blue-950   ">

        <div className="w-10/12 flex flex-row justify-center items-center mx-auto gap-7 pt-10 ">
                
                
                 {/* leff div */}
                <div className="flex flex-col gap-3 w-96  ">

                    <div className="text-white font-semibold text-4xl">
                    <h1 >Power of finance, Grow your business</h1>
                    </div>
                    <div className="border-b-4 border-blue-800 w-6"></div>
                   
                    <div className="text-slate-300 ">
                        <p>Accept payments from customer Automate payout vender & Employe. Never run out of capital</p>
                    </div>

                    <div className="bg-blue-700 w-28 h-9 place-content-center text-white font-semibold text-center items-center  rounded-md  transition-all duration-200 hover:bg-blue-900 ">
                        <button>Sign Up Now </button>
                    </div>
                  
                </div>

                {/* right dev */}
                
                <div className="max-w-fit  justify-center block hover:zoom-out-90">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlcm8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                    className="h-96 w-96 mb-20 opacity-50 rounded-full"></img>
                        
                </div>              
                
       </div>
       <div className="absolute w-full ">
        <img src="https://images.unsplash.com/photo-1710162734220-d543f0dff259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
        className="w-full h-28 "></img>
        </div>

    </section>

    )
}