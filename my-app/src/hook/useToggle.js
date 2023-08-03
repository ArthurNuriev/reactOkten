import {useEffect} from "react";

const useToggle = (setStatus) => {

    useEffect(() => {
        setStatus(false)
    });

};

export {useToggle};