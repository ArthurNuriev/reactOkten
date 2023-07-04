import logo from './logo.svg';
import './App.css';
import SimpsonFamily from "./components/SimpsonFamily/SimpsonFamily";
import RickandMorty from "./components/RickandMorty/RickandMorty";

const characterArmagheadonJson = {
    "id": 24,
    "name": "Armagheadon",
    "status": "Alive",
    "species": "Alien",
    "type": "Cromulon",
    "gender": "Male",
    "origin": {"name": "Signus 5 Expanse", "url": "https://rickandmortyapi.com/api/location/22"},
    "location": {"name": "Signus 5 Expanse", "url": "https://rickandmortyapi.com/api/location/22"},
    "image": "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/16"],
    "url": "https://rickandmortyapi.com/api/character/24",
    "created": "2017-11-05T08:48:30.776Z"
}
const characterPhillipJson = {
    "id": 260,
    "name": "Phillip Jacobs",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {"name": "unknown", "url": ""},
    "location": {"name": "Interdimensional Cable", "url": "https://rickandmortyapi.com/api/location/6"},
    "image": "https://rickandmortyapi.com/api/character/avatar/260.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/19"],
    "url": "https://rickandmortyapi.com/api/character/260",
    "created": "2017-12-31T13:34:58.839Z"
}
const characterBigBoobedJson = {
    "id": 41,
    "name": "Big Boobed Waitress",
    "status": "Alive",
    "species": "Mythological Creature",
    "type": "",
    "gender": "Female",
    "origin": {"name": "Fantasy World", "url": "https://rickandmortyapi.com/api/location/48"},
    "location": {"name": "Fantasy World", "url": "https://rickandmortyapi.com/api/location/48"},
    "image": "https://rickandmortyapi.com/api/character/avatar/41.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/5"],
    "url": "https://rickandmortyapi.com/api/character/41",
    "created": "2017-11-05T10:13:45.960Z"
}
const characterPCoatJson = {
    "id": 489,
    "name": "P-Coat Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {"name": "unknown", "url": ""},
    "location": {"name": "Citadel of Ricks", "url": "https://rickandmortyapi.com/api/location/3"},
    "image": "https://rickandmortyapi.com/api/character/avatar/489.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/28"],
    "url": "https://rickandmortyapi.com/api/character/489",
    "created": "2018-05-22T17:39:37.604Z"
}
const characterJanMichaelJson = {
    "id": 173,
    "name": "Jan-Michael Vincent",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {"name": "unknown", "url": ""},
    "location": {"name": "Interdimensional Cable", "url": "https://rickandmortyapi.com/api/location/6"},
    "image": "https://rickandmortyapi.com/api/character/avatar/173.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/19"],
    "url": "https://rickandmortyapi.com/api/character/173",
    "created": "2017-12-29T17:33:23.972Z"
}
const characterDannyJson = {
    "id": 526,
    "name": "Danny Publitz",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
    "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
    "image": "https://rickandmortyapi.com/api/character/avatar/526.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/33"],
    "url": "https://rickandmortyapi.com/api/character/526",
    "created": "2020-05-02T13:14:28.386Z"
}

const characterArmagheadon = JSON.parse(JSON.stringify(characterArmagheadonJson));
const characterPhillip = JSON.parse(JSON.stringify(characterPhillipJson));
const characterBigBoobed = JSON.parse(JSON.stringify(characterBigBoobedJson));
const characterPCoat = JSON.parse(JSON.stringify(characterPCoatJson));
const characterJanMichael = JSON.parse(JSON.stringify(characterJanMichaelJson));
const characterDanny = JSON.parse(JSON.stringify(characterDannyJson));

function App() {
  return (
    <div className="App">
        <div className='SimpsonFamily'>
            <SimpsonFamily
                name = {'Homer'}
                lastname = {'Simpson'}
                age = {'45'}
                gender = {'male'}
                photo = {'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />
            <SimpsonFamily
                name = {'Marge'}
                lastname = {'Simpson'}
                age = {'38'}
                gender = {'female'}
                photo = {'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
            />
            <SimpsonFamily
                name = {'Bart'}
                lastname = {'Simpson'}
                age = {'10'}
                gender = {'male'}
                photo = {'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            />
            <SimpsonFamily
                name = {'Lisa'}
                lastname = {'Simpson'}
                age = {'8'}
                gender = {'female'}
                photo = {'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
            />
        </div>
        <div className= 'RickandMorty'>
            <RickandMorty element = {characterArmagheadon}/>
            <RickandMorty element = {characterPhillip}/>
            <RickandMorty element = {characterBigBoobed}/>
            <RickandMorty element = {characterPCoat}/>
            <RickandMorty element = {characterJanMichael}/>
            <RickandMorty element = {characterDanny}/>
        </div>
    </div>
  );
}
export default App;
