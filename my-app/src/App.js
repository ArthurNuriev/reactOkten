import './App.css';
import {TestUseMemo} from "./components/TestUseMemo/TestUseMemo";
import {useCallback, useState} from "react";
import TestUseCallback from "./components/TestUseCallback/TestUseCallback";
import {Posts} from "./components/Posts/Posts";
import {ArrComp} from "./components/ArrComp/ArrComp";


function App() {

    const [data, setData] = useState(0)
    const [number, setNumber] = useState(0)
    const [smth, setSmth] = useState([1,3,4])



    const addSmth = useCallback((n) => {

        for (let i = 0; i < 1000000000; i++) {
            n += 1;
        }
        setSmth([...smth, n])

    }, [smth]);


    return (
        <div className="App">
            <div className={"memo"}>
                <p>useMemo</p>
            <TestUseMemo data={data}/>
            <button onClick={()=>setData(data + 1)}>setData</button>
            <button onClick={()=>setNumber(number + 1)}>setNumber</button>
            <p>number: {number}</p>
            </div>

            {/*todo*/}

            <div className={"memo"}>
                <TestUseCallback addSmth={addSmth} smth={smth}/>
                <p>smth: {smth}</p>
            </div>

            <div className={"memo"}>
                <Posts/>
            </div>

            <div className={"memo"}>
                <ArrComp/>
            </div>

        </div>
    );
}

export default App;
