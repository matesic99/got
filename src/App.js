import { useEffect, useState } from 'react'
import './App.css'
import SearchBox from './SearchBox'
import Cards from './Cards'
import MyButton from './Player'


function App() {

const [characters, setCharacters] = useState([])

useEffect(()=>{

fetch ("https://thronesapi.com/api/v2/Characters")
.then((response)=> response.json())
.then((users)=> setCharacters(users))


},[])




const cardElements = characters.map(char => {
  return <Cards 
  
  key={char.id}
  image={char.imageUrl}
  fullname={char.fullName}
  title={char.title}
  family={char.family}/>}
  
)


  return (
    <div className="App bg-slate-900  bg-no-repeat bg-cover h-max p-5">
      <MyButton />
      <SearchBox />

      {cardElements}
    </div>
  )
}

export default App
