export default function Cards(characters){
const {image,fullname, title,family} = characters;

    return(
        
        <div className="flex justify-center items-center flex-col text-white p-5 mt-10 shadow-lg shadow-black rounded-lg">
                <div>
                    <img src={image}  className="rounded-lg shadow-2xl shadow-black-900 w-30 h-30"  alt="" />
                </div>
                <div>
                <p className="font-mono font-bold text-center text-xl font-['Alegreya'] mt-2">{fullname}</p>
                </div>
                <div className="flex justify-around  items-center mt-2 ">
                <img src="./images/crown.png" className="w-5 h-5 mr-2" alt="" />
                <p className="text-gray-500 text-center">{title}</p>
                </div>
                <div className="flex justify-around  items-center mt-3" >
                <img src="./images/house.png"  className="w-5 h-5 mr-2" alt="" />
                <p className="text-gray-500 text-center">{family}</p>
                </div>



        </div>



    )




}