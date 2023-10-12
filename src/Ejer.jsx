// Challenge 2 
import {useState} from "react"

const Ejer = ({value}) => {
    const [counter, setCounter] = useState (value)
    
    const handleAdd = () => {
        setCounter(counter + 1);
        console.log(counter)

    }
    const resta = () => {
        setCounter(counter - 1);
        console.log(counter)

    }
    const reset = () => {
        setCounter(value);
        console.log(counter)

    }

    return (
        <>
        <h1> Challenge2 </h1>
        <span> {counter} </span>
        <span> {resta} </span>
        <button onClick = {() => handleAdd ()}> mas </button>
        <button onClick = {() => resta ()}> menos </button>
        <button onClick = {() => reset ()}> resetear </button>
        </>
    )


}

export default Ejer
