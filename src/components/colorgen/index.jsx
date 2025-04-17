import { useState } from "react"

export default function ColorGen() {
    const [colorFormat, setColorFormat] = useState('')
    const switchColor = (e) => {
        setColorFormat(e.target.value)
    }
    const [color, setColor] = useState("##FFFFFF")
    const generateRandomColor = () => {
        let color = ""
        if(colorFormat === "hex"){
            color += "#"
            const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
            for(let i = 0; i < 6; i++){
                color += hex[Math.floor(Math.random() * 16)]
            }
            setColor(color)
        } else {
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            setColor(`rgb(${r}, ${g}, ${b})`)
        }
    }
    return <div className="container"
    style={{
        height:"100vw",
        width: "100vh",
        background:color,
    }}
    >
        <h1>{
        colorFormat !== "" ? colorFormat : "Choose color"
        }</h1>
        <button onClick={generateRandomColor}>Generate Color</button>
        <br />
        <input type="radio" name="switch-color" value={"rgb"} onChange={switchColor}/> RGB 
        <br />
        <input type="radio" name="switch-color" value={"hex"} onChange={switchColor}/> Hex
        <br />
        <h1>Color: {color}</h1>
     </div>
}