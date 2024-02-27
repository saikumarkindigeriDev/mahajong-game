




import { useState,useEffect } from 'react'
import Card from '../Card'
import './index.css'


const Game=()=>{
    const [items, setItems] = useState([
        { id: 1, img: '/img/tiger.png', status: "" },
        { id: 1, img: '/img/tiger.png', status: "" },
        { id: 2, img: '/img/lion.png', status: "" },
        { id: 2, img: '/img/lion.png', status: "" },
        { id: 3, img: '/img/giraffe.png', status: "" },
        { id: 3, img: '/img/giraffe.png',status: "" },
        { id: 4, img: '/img/zebra.png',status: "" },
        { id: 4, img: '/img/zebra.png',status: "" },
        { id: 5, img: '/img/monkey.png', status: "" },
        { id: 5, img: '/img/monkey.png', status: "" },
        { id: 6, img: '/img/fox.png', status: "" },
        { id: 6, img: '/img/fox.png', status: "" },
        { id: 7, img: '/img/elephant.png',status: "" },
        { id: 7, img: '/img/elephant.png', status: "" },
        { id: 8, img: '/img/kangaroo.png', status: "" },
        { id: 8, img: '/img/kangaroo.png', status: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1) 
    const [score,setScore]=useState(0)
    const initialTime = 10*60; 
    const [seconds, setSeconds] = useState(initialTime); 
    const [gameFinished, setGameFinished] = useState(false);


    useEffect(() => {
        const intervalId = setInterval(() => {
            
          if (seconds > 0) {
            setSeconds((prevSeconds) => prevSeconds - 1);
          } else {
           
            setGameFinished(true);
            clearInterval(intervalId);
          }
        }, 1000);
    
       
        return () => clearInterval(intervalId);
      }, [seconds, initialTime]); 
    
      const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

      const fsormatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };
    function check(current){
        if(items[current].id === items[prev].id){
            items[current].status = "correct"
            items[prev].status = "correct"
            setItems([...items])
            setPrev(-1)

            setScore(score+1)

            if (score===8){
                setGameFinished(true)
            }
           
        }else{
            items[current].status = "wrong"
            items[prev].status = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].status = ""
                items[prev].status = ""
                setItems([...items])
                setPrev(-1) 

                if (score>0){
                    setScore(score-1)

                }
               
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].status = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }
const name=localStorage.getItem('name')
    return (

        <div className='whole-con'>
{
gameFinished?(
   
        
  <div className='result-con'>
    <h2 className='game-finished' >Game Finished!</h2>
    <h2 className='score'>Score : {score}</h2>
      <p >Time Taken: {fsormatTime(initialTime-seconds)}</p>
    
   
    </div>
  ):(
    <div className='main-con'> 
    <h1 className='mahojong-game'>Mahajong Game</h1>
    <div className='top-section'>
    <h2 className='welcome'>Welcome <span className='my-name'>{name}</span></h2> 
<h2 className='score'>Score : {score}</h2>
<p>Time: {formatTime(seconds)}</p>
    </div>

        <div className="container">

           
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
</div>


)
}

        </div>



        
    )
}

export default Game