import {useMemo, useState} from "react";
import {useToggle} from "../../hook/useToggle";


const TestUseMemo = ({data}) => {

    const [status, setStatus] = useState(true)

    useToggle(setStatus)

    const expensiveCalc = (number) => {
        console.log("usememo")
        for (let i = 0; i < 1000000000; i++) {
            number += 1;
        }
        return number;
    }

    const calculation = useMemo(() => {
        return  expensiveCalc(data)
    }, [data]);

    return (
        <div>
            <p>status: {status.toString()}</p>
            <p>calc: {calculation}</p>
        </div>
    );
};

export {TestUseMemo};