## Fruit battle game. 

Frontend made with React and backend with Node.js. Made this application on Windows 10.

Application uses this API: https://www.fruityvice.com/doc/index.html

You can try it on Heroku: https://fruit-battle.herokuapp.com/

Background photo by Tangerine Newt on Unsplash

-----

**HOW TO RUN LOCALLY**  
If you want to run this locally clone the repository. Install dependecies ("npm install") in root and api folder. Run "npm start" in the root folder to start the app. Set API_BASE_URL in /api/index.js to "https://www.fruityvice.com/api/fruit/all". Then go to /api- folder and run "npm start" to start the backend.

-----
**ABOUT THE GAME**  
Fruits fight against each other until one of the fruit loses all its health points. Fruits have battle attributes according to the nutrititons they have.

**BATTLE ATTRIBUTES**  
Delay = Carbohydrates + protein + fat  
Health = Calories  
Attack = Carbohydrates  
Defence = Fat  

**RULES**

1. Fruit with less delay gets to hit first

2. If delay is equal Fruit 1 gets to hit first

3. Damage to opponent is attacker attack attribute minus 10% of opponent's defence attribute

4. Fruit that loses HP first loses the battle.
