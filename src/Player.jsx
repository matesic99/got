import useSound from 'use-sound'
import mySound from "../src/assets/sound/got.mp3"


export default function MyButton(){
  const [playSound] = useSound(mySound)
  
  return (
<div className='flex justify-center align-center'>
<img src="./images/goldgot.png" onClick={() => playSound()} className="w-30 h-30 mt-5" alt="logo" />
</div>
  )
}



