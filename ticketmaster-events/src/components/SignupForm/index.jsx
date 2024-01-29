import { useState } from "react";

const SignupForm = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleClearClick = () =>{
        setName('');
        setAge('');
        setAdress('');
        setPhone('');
        setZipcode('');
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
    };


    return (
        <form onSubmit={handleSubmitForm}>
            <label>
                Name 
                <input value={name} onChange={(evt) => setName(evt.target.value)} required/>
            </label>
            <br />
            <label>
                Age 
                <input value={age} onChange={(evt) => setAge(evt.target.value)} required/>
            </label>
            <br />
            <label>
                Adress 
                <input value={adress} onChange={(evt) => setAdress(evt.target.value)} required />
            </label>
            <br />
            <label>
                Phone 
                <input value={phone} onChange={(evt) => setPhone(evt.target.value)} required/>
            </label>
            <br />
            <label>
                Zipcode 
                <input value={zipcode} onChange={(evt) => setZipcode(evt.target.value)} required />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submi</button>
            </div>
        </form>
        

    );
};

export default SignupForm;