import {useState} from 'react';
import styles from './Rules.module.css';

function Rules() {

    const [isShowing, setIsShowing] = useState(false)

    return (
        <div>
            <button className={styles.button} onClick={()=> setIsShowing(!isShowing)}>SHOW RULES</button>
            {
            isShowing &&
                <div className={styles.infoStyle}>
                    <h4>RULES</h4>
                    <p><strong>1.</strong><br/>Fruit with less delay gets to hit first </p>
                    <p><strong>2.</strong><br/>If delay is equal Fruit 1 gets to hit first</p>
                    <p><strong>3.</strong><br/>Damage to opponent is attacker attack attribute minus 10% of opponent's defence attribute</p>
                    <button className={styles.button} onClick={()=> setIsShowing(!isShowing)}>Hide rules</button>
                </div>
            }
        </div>
    );
}

export default Rules;