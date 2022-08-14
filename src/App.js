import { useEffect, useState } from 'react'
import './App.css'
import SearchBox from './SearchBox'
import MyButton from './Player'
import CardList from './CardList'
import Cards from './Cards'

function App() {

const [characters, setCharacters] = useState([])
const [search, setSearch] = useState('')
const [filteredCharacters, setFilteredCharacters] = useState({characters})

useEffect(()=>{

fetch ("https://thronesapi.com/api/v2/Characters")
.then((response)=> response.json())
.then((users)=> setCharacters(users))


},[])

useEffect(()=>{
   const newFilteredCharacters = characters.filter((character)=>{
        return character.firstName.toLowerCase().includes(search.toLowerCase())
    } )
    setFilteredCharacters(newFilteredCharacters)
} ,[characters, search])

const handleSearch = (event)=>{
    const searchValue = event.target.value.toLowerCase()
    setSearch(searchValue)

}

console.log(setSearch)


const cardElements = characters.map(char => {
  return <Cards 
  
  key={char.id}
  image={char.imageUrl}
  fullname={char.fullName}
  title={char.title}
  family={char.family}/>}
  
)


  return (
    <div className="App bg-slate-900  bg-no-repeat bg-cover  h-max p-5">
      <MyButton />
      <div className="flex items-center mt-5">   
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src="./images/swords.png" className="w-5 h-5" alt="" />
            </div>
            <input  type="text" id="voice-search" onChange={handleSearch} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-slate-200 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Search GoT Characters" required></input>
            <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
               <img src="./images/dragon.png" className="w-5 h-5" alt="" />
            </button>
        </div>
    
    </div>

    {characters.filter((val=>{

      return val.firstName.toLowerCase().includes(search.toLowerCase())
    })).map(char => {
  return <Cards 
  
  key={char.id}
  image={char.imageUrl}
  fullname={char.fullName}
  title={char.title}
  family={char.family}/>}
  
)}
    </div>
  )
}

export default App
