import React, {useEffect, useState} from 'react';
import styles from './UserComponent.module.css'
const UserComponent = () => {

    const [formValue, setFormValue] = useState({
        userName: '',
        email: '',
        phone: '',
        website: ''
    });
    const handelFormChange=(key, value)=>{
        setFormValue(prevState => ({
            ...prevState,
            [key]:value
        }))
    }

    useEffect(() => {
        console.log(formValue)
    },[formValue])


    const handelSubmit = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'POST', body: JSON.stringify(formValue)})
            .then(response => response.json())
            .then(data => console.log(data))
        // console.log(formValue)
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handelSubmit}>
                <h3>User</h3>
                <label>
                    userName:<br/>
                    <input type="text" onChange={(e)=>handelFormChange('userName', e.target.value)} value={formValue.userName}/>
                </label><br/>
                <label>
                    email:<br/>
                    <input type="text" onChange={(e)=>handelFormChange('email', e.target.value)} value={formValue.email}/>
                </label><br/>
                <label>
                    phone:<br/>
                    <input type="number" onChange={event => handelFormChange('phone',+event.target.value)} value={formValue.phone}/>
                </label><br/>
                <label>
                    website:<br/>
                    <input type="text" onChange={event => handelFormChange('website', event.target.value)} value={formValue.website}/>
                </label><br/><br/>
                <label>
                    <input type="submit" value="submit"/>
                </label>
            </form>
        </div>
    );
};

export {UserComponent};