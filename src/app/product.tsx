export default function Page(){
    return (
    <div className="w-2/5 flex bg-red-100 ml-7 mt-8">
      <div className="flex w-48 relative">
        <img src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"></img>
      </div>
      
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg  font-semibold">
          Classic Utility JacketKids 
          </h1>
          <div className="font-semibold">$1100</div>
          <div className="w-full flex-none mt-2 text-sm ">In stock</div>
        </div>
  
          <div className="flex items-baseline mt-4 mb-6 border-b  border-green-700">
          <div className="space-x-2 flex text-sm mb-4">
          <label>
           <input className="sr-only peer" name="size" type="radio" value="xs" defaultChecked></input>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
           XS
            </div>
          
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="s" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              S
            </div>
          </label>
          <label>
            <input className="sr-only peer " name="size" type="radio" value="m"></input>
            <div className="w-9 h-9  rounded-lg flex items-center justify-center peer-checked:font-semibold peer-checked:bg-green-600 peer-checked:text-white ">
              M
            </div>
          </label>
  
          <label>
            <input className="sr-only peer " name="size" type="radio" value="xl" ></input>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-center peer-checked:bg-red-700 peer-checked:font-semibold peer-checked:text-white">
              XL
            </div>
          </label>
           </div>
           </div>
           
          <div className="space-x-6 flex text-sm font-medium mb-3">
            <div className="flex-auto flex space-x-4">
              <button className="bg-white h-10 px-6 rounded-md border border-slate-500 shadow-lg " defaultChecked   type="submit">
                Buy now
              </button>
            </div>
            <div className="flex-auto flex">
              <button className=" bg-white h-10  px-6 rounded-md border border-slate-500" type="submit">
                Add to bag
              </button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-slate-700 ">
        Free shipping on all continental US orders.
      </p>
      </form>
      
  
         
  
        </div>
      
  
  
  
    )
  }