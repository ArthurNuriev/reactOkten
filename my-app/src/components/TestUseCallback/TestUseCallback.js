import {memo, useState} from "react";
import {useToggle} from "../../hook/useToggle";


const TestUseCallback = ({addSmth, smth}) => {

    const [status, setStatus] = useState(true)

    useToggle(setStatus)


    console.log('useCallback')

    return (
        <div>
            <p>status: {status.toString()}</p>
            <button onClick={()=>addSmth(5)}>addSmth</button>
        </div>
    );
};

export default memo(TestUseCallback);