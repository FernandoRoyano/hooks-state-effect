import { useEffect, useState } from "react"

const TimerThree = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Se está montando el componente, solo aparezco una vez')

        const countingInt = setInterval(() => {
            setCount((prevCount) => prevCount+ 1)
        }, 1000)

        return () => {
            console.log('Aparezco en la fase de desmontaje')
            clearInterval(countingInt)
        }
    }, [])    // <----- Significa que sólo se llama en la Mounting phase

    return (
        <div className="Timer">
            <h2>Timer</h2>

            <h3>{count}</h3>

        </div>
    )
}

export default TimerThree