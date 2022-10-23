import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import Battle from '../Battle/Battle';
import PlayerStats from '../PlayerStats/PlayerStats';
import Rules from '../Rules/Rules';
import styles from './SelectFruits.module.css'
import selectorStyle from './selectorStyles'

// Create fruits with battle attributes. Send fruits in props to a Battle component for battle logic and FruitStats component for showing stats dynamically.
const SelectFruits = ( {data} ) => {

    const [fruit1, setFruit1] = useState()
    const [fruit2, setFruit2] = useState()
    
    // Fruit 1
    const handleChange1 = selectedOption => {
        const delay = selectedOption.nutritions.carbohydrates + selectedOption.nutritions.protein + selectedOption.nutritions.fat
        const health = selectedOption.nutritions.calories
        const attack = selectedOption.nutritions.carbohydrates
        const defence = selectedOption.nutritions.fat
        const fruit1stats = {
            ...selectedOption, 
            "delay": parseFloat(delay.toFixed(2)),
            "attack": parseFloat(attack.toFixed(2)),
            "defence": parseFloat(defence.toFixed(2)),
            "health": parseFloat(health.toFixed(2))
            }
        setFruit1(fruit1stats)
    }

    // Fruit 2
    const handleChange2 = selectedOption => {
        const delay = selectedOption.nutritions.carbohydrates + selectedOption.nutritions.protein + selectedOption.nutritions.fat
        const health = selectedOption.nutritions.calories
        const attack = selectedOption.nutritions.carbohydrates
        const defence = selectedOption.nutritions.fat
        const fruit2stats = {
            ...selectedOption, 
            "delay": parseFloat(delay.toFixed(2)),
            "attack": parseFloat(attack.toFixed(2)),
            "defence": parseFloat(defence.toFixed(2)),
            "health": parseFloat(health.toFixed(2))
        }
        setFruit2(fruit2stats)
    }

    // // Styles for react-select selector
    // const selectStyles = {
    //     control: (styles) => ({
    //         ...styles,
    //         borderRadius:'10px'
    //     }),
    //     container: (base) => ({
    //         ...base,
    //         width:'180px',
    //         minWidth:'130px',
    //         border: 0,
    //         borderRadius:'10px'
    //     }),
    //     menu: (provided) => ({
    //         ...provided,
    //         borderRadius:'10px',
    //     }),
    //     option: (provided) => ({
    //         ...provided,
    //         borderRadius:'10px',
    //     }),
    //     menuList: (base) => ({
    //         ...base,
    //         "::-webkit-scrollbar": {
    //           width: "10px",
    //           height: "0px",
    //         },
    //         "::-webkit-scrollbar-track": {
    //           background: "#f1f1f1"
    //         },
    //         "::-webkit-scrollbar-thumb": {
    //           background: "rgb(233, 166, 78)"
    //         },
    //         "::-webkit-scrollbar-thumb:hover": {
    //           background: "lightgreen"
    //         }
    //       })  
    // };
      
    return (
        <div className={styles.wrapper}>
            <Rules />
            <h2 className={styles.selectHeader}>SELECT FRUITS FOR BATTLE</h2>
            <div className={styles.box}>
            <Select
                placeholder="Select a first fruit for battle" 
                options={data} 
                getOptionLabel={option => option.name}
                getOptionValue={option => option}
                styles={selectorStyle}
                onChange={handleChange1}
            />
            <h3 className={styles.vsHeader}>VS</h3>
            <Select
                placeholder="Select a second fruit for battle" 
                options={data} 
                getOptionLabel={option => option.name}
                getOptionValue={option => option}
                styles={selectorStyle}
                onChange={handleChange2}
            />
            </div>
            <PlayerStats fruit1={fruit1} fruit2={fruit2}/>
            <Battle fruit1={fruit1} fruit2={fruit2}/>
        </div>
    );
};

export default SelectFruits;