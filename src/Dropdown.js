import React from "react";
import { useState } from "react";
function Dropdown(){
    const [state, setState] = useState(false);
    const [list] = useState(['workout', 'weightLoss', 'Diet', 'Morning workout'])
const [value, setValue] = useState('');
    const showDropdown = () =>{
setState(true);

    }

    const hideDropdown = (e) =>{
        setValue(e.target.textContent);

        setState(false);

    } 

    const results = list.map((result, index) => {
        return <a href="#" onClick={hideDropdown} key = {index}>{result}</a>
    })
    return (
        
        <div className="dropdown">
        <h1>Click on the dropdown</h1>

        <h3>{value}</h3>

        <button className="dropbtn" onMouseEnter={showDropdown}>Select</button>
        <div className="dropdown-content" style={{ display: `${state ? 'block' : 'none'}` }}>{results}</div>
        </div>

        
       
    )
}

export default Dropdown;