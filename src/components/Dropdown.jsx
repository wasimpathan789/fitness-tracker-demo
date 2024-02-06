import { useRef, useState } from 'react'
import './Dropdown.css'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [value, setValue] = useState("")

    const dropdownHandler = () => {
        setIsOpen(!isOpen)
    }

    console.log("a" + value);
    const input = () => {
        setValue(value)
        console.log(value)
    }

    const currentFilter = useRef('All');

    const handleSelectFilter = (e) => {
        currentFilter.current = e.target.value;
    }
    return (
        // <div className='dropdownContainer'>
        //     <h1>hi</h1>

        //     <div onClick={dropdownHandler} className="menu">
        //         {value}


        //     </div>

        //     {isOpen ? (<div className="items">
        //         <option onClick={input} value={value} onChange={(e) => setValue(e.target.input)}>wasim</option>
        //         <h2>Khan</h2>

        //     </div>) : null}



        // </div>
        <div className='filters-dropdown'>
            <div className="select-header">
                <p>Filter by Region</p>
                <img src="../images/chevron-down-sharp.svg" alt='dropdown-arrow'></img>
            </div>
            <div className="select-body">
                <button value='All' className="select-option" onClick={handleSelectFilter}>All</button>
                <button value='Africa' className="select-option" onClick={handleSelectFilter}>Africa</button>
                <button value='America' className="select-option" onClick={handleSelectFilter}>America</button>
                <button value='Asia' className="select-option" onClick={handleSelectFilter}>Asia</button>
                <button value='Europe' className="select-option" onClick={handleSelectFilter}>Europe</button>
                <button value='Oceania' className="select-option" onClick={handleSelectFilter}>Oceania</button>
            </div>
        </div>
    )
}

export default Dropdown
