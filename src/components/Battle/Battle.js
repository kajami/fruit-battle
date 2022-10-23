import { useState, useEffect, useRef } from 'react'
import styles from './Battle.module.css';
import Notification from '../Notification/Notification';
import Turn from '../Turn/Turn';

export default function Battle({ fruit1, fruit2 }) {
    
    const [battlelog, setBattlelog] = useState([])
    const [errorMessage, setErroMessage] = useState("")
    const [winMessage, setWinMessage] = useState("")
    const refToScroll = useRef(null)

    // Set error message to dissapear after 3 sec.
    useEffect(() => {
        if (errorMessage){
          setTimeout(() => setErroMessage(null), 3000)
          setWinMessage(null)
        }
    }, [errorMessage])
    
 
    const startBattle = () => {

        // Sort list so that fruit that has smaller delay attribute starts the battle
        if(fruit1 && fruit2){
        const fruits = [fruit1, fruit2]
        fruits.sort((a, b) => a.delay > b.delay ? 1 : -1)
       
        // Roll window to a ref
        refToScroll.current.scrollIntoView({ behavior:'smooth' })  

        // Attack power is attack attribute minus 10% of enemys defence attribute.
        const attackPower1 = parseFloat((fruits[0].attack-(fruits[0].defence*0.1)).toFixed(2))
        const attackPower2 = parseFloat((fruits[1].attack-(fruits[1].defence*0.1)).toFixed(2))
        let totalDamage1 = 0
        let totalDamage2 = 0
        let turn = 1;
        let arr = []
        
        // Loop over the the battle and save it to an array
        while(true) {
            // Turn 1
            arr.push({'id':`i${totalDamage1}${turn}`, 'turn':`${turn}`})
            arr.push({'id':`i${totalDamage1}`, 'content':`${fruits[0].name} attacks and does ${attackPower1} points damage`})
            totalDamage1 = totalDamage1+attackPower1
            turn++
            let fruit2RemainingHealth = parseFloat((fruits[1].health - totalDamage1).toFixed(2))

            // Check if fruit 2 has health left 
            if(totalDamage1>=fruits[1].health){
                arr.push({'id':`i${totalDamage1}`, 'content': `GAME OVER! Fruit 2 ${fruits[1].name} has 0 HP left. Winner Fruit 1 ${fruits[0].name}`})
                setWinMessage(`Game over! Fruit 2 ${fruits[1].name} has 0 HP left. Winner Fruit 1 ${fruits[0].name}.`)
                break;
            }

            arr.push({'id':`i${totalDamage1+1}`, 'content':`Remaining health of ${fruits[1].name}: ${fruit2RemainingHealth} HP`})

            // Turn 2
            arr.push({'id':`y${totalDamage2}${turn}`, 'turn':`${turn}`})
            arr.push({'id':`y${totalDamage2}`, 'content':`${fruits[1].name} attacks and does ${attackPower2} points damage`})
            totalDamage2 = totalDamage2+attackPower2
            turn++
            let fruit1RemainingHealth = parseFloat((fruits[0].health - totalDamage2).toFixed(2))

            // Check if fruit 1 has health left
            if(totalDamage2>=fruits[0].health){
                arr.push({'id':`y${totalDamage2}`, 'content':`GAME OVER! Fruit 1 ${fruits[0].name} has 0 HP left. Winner Fruit 2 ${fruits[1].name}`})
                setWinMessage(`Game over! Fruit 1 ${fruits[0].name} has 0 HP left. Winner Fruit 2 ${fruits[1].name}.`)
                break;
            }
            arr.push({'id':`y${totalDamage2+1}`, 'content':`Remaining health of ${fruits[0].name} ${fruit1RemainingHealth} HP`})   
            }
            setBattlelog(arr)
        }
        else{
            setErroMessage('Choose two fruits first.')
        }
    }

    return (
        <div className={styles.container}>
            <button ref={refToScroll} className={styles.button} onClick={startBattle}>START BATTLE</button>
            {errorMessage ?
            <Notification message={errorMessage} color={'red'}/>:<Notification message={winMessage} color={'green'}/> 
            }
            {battlelog.map(battleinfo => (
                <div
                    key={battleinfo.id}
                    className={battleinfo.id.indexOf('i') > -1 ? styles.infoPlayer1 : styles.infoPlayer2}                >
                    <Turn turn={battleinfo.turn}/>
                    {battleinfo.content}
                </div>
                )
            )}
        </div>
    );
}