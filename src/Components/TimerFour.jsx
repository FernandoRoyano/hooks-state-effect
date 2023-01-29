import { useEffect, useState } from "react"

const TimerFour = () => {
    const [count, setCount] = useState(0)
    const [test, setTest] = useState(true)

    useEffect(() => {
        console.log('Se está montando el componente, solo aparezco una vez')

        const countingInt = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000)

        return () => {
            console.log('Aparezco en la fase de desmontaje')
            clearInterval(countingInt)
        }
    }, [])    // <----- Significa que sólo se llama en la Mounting phase

    useEffect(() => { 
        console.log(`Estoy en la fase de update, ${count}`)
    }, [count])
    
    useEffect(() => {
        console.log('Estoy en el estado de Test', test);
    }, [test, count])

    return (
        <div className="Timer">
            <h2>Timer four</h2>

            <h3>{count}</h3>
<button onClick={()=>setTest(!test)}>Update Test</button>
        </div>
    )
}

export default TimerFour