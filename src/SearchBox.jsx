export default function SearchBox (props){

    return(
    
    
    <div className="flex items-center mt-5">   
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src="./images/swords.png" className="w-5 h-5" alt="" />
            </div>
            <input  type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-slate-200 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Search GoT Characters" required></input>
            <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
               <img src="./images/dragon.png" className="w-5 h-5" alt="" />
            </button>
        </div>
    
    </div>
    
    
    )
    
    
    
    }