/*import React from 'react';
import {useState} from 'react';
import './BasicForm.css';

/*function BasicForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email, password };

            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);

            setEmail("");
            setPassword("");
        } else {
            alert("plz fill the data");
        }

    };

    return (
        
        <>
        <div className='form' >
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Login</button>

            </form>

            <div>
                {allEntry.map((curElem) => {
                    const { id, email, password } = curElem;
                    return (
                        <div className="showDataStyle" key={id}>
                            <p>{email}</p>
                            <p>{password}</p>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
}

export default BasicForm;*/

/*
const MultipleInputs = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        
        setUserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id:new Date().getTime().toString() } 
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);   

        setUserRegistration({ username:"", email: "", phone: "", password: "" });
    }

    return (
        <>
        <div className='form'>
        
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Fullname</label>
                    <input type="text" autoComplete="off" 
                      value={userRegistration.username}  
                      onChange={handleInput}
                     name="username" id="username"/>
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" autoComplete="off" 
                      value={userRegistration.email}  
                      onChange={handleInput}
                     name="email" id="email"/>
                </div>

                <div>
                    <label htmlFor="phone">phone</label>
                    <input type="text" autoComplete="off" 
                      value={userRegistration.phone}  
                      onChange={handleInput}
                     name="phone" id="phone"/>
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" autoComplete="off" 
                      value={userRegistration.password}  
                      onChange={handleInput}
                     name="password" id="password"/>
                </div>

                <button type="submit">Registration</button>
            </form>

        </div>
        </>
    )   
}

export default MultipleInputs;
*/