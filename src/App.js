import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import SelectFruits from './components/SelectFruits/SelectFruits';

function App() {
  const [data, setData] = useState();

  // Fetch data from api and save it to a state. Filter out fruits that dont have nutrions set.
  useEffect(() => {
    axios.get("/api")
    .then((response) => {
      const filteredData = response.data.filter(fruit => {
        return fruit.nutritions.carbohydrates !== 0 && fruit.nutritions.calories !== 0;
      });
      setData(filteredData)    
    })
    .catch((error) => {
      console.log(`Error getting fruits from api ${error}`);
    });
  },[])
  
  return (
    <div className="App">
      <h1>FRUIT BATTLE</h1>
      <SelectFruits data={data}/>
    </div>
  );
}

export default App;
