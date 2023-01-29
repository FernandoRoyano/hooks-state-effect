import { useEffect, useState } from "react"

const TimerTwo = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Se está montando el componente, solo aparezco una vez')

        setInterval(() => {
            setCount((prevCount) => prevCount+.5)
        }, 1000);
    }, [])    // <----- Significa que sólo se llama en la Mounting phase

    return (
        <div className="Timer">
            <h2>Timer</h2>

            <h3>{count}</h3>

        </div>
    )
}

export default TimerTwo