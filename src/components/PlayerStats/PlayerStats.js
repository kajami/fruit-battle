import React from 'react';
import styles from './PlayerStats.module.css'

function PlayerStats({ fruit1, fruit2 }) {
    
    // Show fruit stats after picking fruit 
    return (
        <div className={styles.divStyle}>
            {fruit1 ?
                <div
                className={styles.infoStyle}>
                <h3>Fruit 1<br/>{fruit1.name}</h3>
                <p>
                    Calories: {fruit1.nutritions.calories} kcal<br/>
                    Carbohydrates: {fruit1.nutritions.carbohydrates} g<br/>
                    Protein: {fruit1.nutritions.protein} g<br/>
                    Fat: {fruit1.nutritions.fat} g<br/>
                    </p>
                <p>
                    Attack: {fruit1.attack}<br/>
                    Health: {fruit1.health}<br/>
                    Defence: {fruit1.defence}<br/>
                    Delay: {fruit1.delay}</p>
                </div> : ""}
            {fruit2 ? <div
                className={styles.infoStyle}>
                <h3>Fruit 2<br/>{fruit2.name}</h3>
                <p>
                    Calories: {fruit2.nutritions.calories} kcal<br/>
                    Carbohydrates: {fruit2.nutritions.carbohydrates} g<br/>
                    Protein: {fruit2.nutritions.protein} g<br/>
                    Fat: {fruit2.nutritions.fat} g<br/>
                </p>
                    <p>Attack: {fruit2.attack}<br/>
                    Health: {fruit2.health}<br/>
                    Defence: {fruit2.defence}<br/>
                    Delay: {fruit2.delay}</p>
                </div> : ""}
        </div>
    );
}

export default PlayerStats;