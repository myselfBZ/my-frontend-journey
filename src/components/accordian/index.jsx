import { useState } from "react";
import { data } from "./data";

export default function Accordian() {
    const [selected, setSelected] = useState(null)




    const handleClick = (id) => {
        if(id == selected) {
            setSelected(null)   
        } else {
            setSelected(id)
        }
    }

    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ? (
                    data.map((item) => {
                       return <div className="item" key={item.id}>
                            <div className="title" >
                                <h3>{item.question}</h3>
                                <span onClick={() => handleClick(item.id)}>+</span>
                            </div>

                            {
                               item.id === selected ? <div className="answer">{item.answer}</div> : null 
                            }

                            <div className="answer">

                            </div>
                        </div>
                    })
                ) : <div>Nothing found!</div>
                
            }
        </div>
    </div>
}