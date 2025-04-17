import { FaStar } from 'react-icons/fa'
import { useState } from 'react';
export default function Stars({noStarts = 5}) {
    const [currentStar, setCurrentStar] = useState(null);

    const rate = (id) => {
        if(id === currentStar){
            setCurrentStar(id - 1)
            return
        }
        setCurrentStar(id)

    }

    const mouseLeave = (id) => {
        setCurrentStar(id - 1)
    }
    return <div>
        {
            [...Array(noStarts)].map((_, i) => {
                let color = 'black'
                if(currentStar !== 0 && currentStar !== null) {
                    if(currentStar > i) {
                        
                        color = 'gold'
                    }
                }
                return <FaStar 
                size={40}
                color={color} 
                key={i} 
                onClick={() => rate(i + 1)}
                />
            })
        }
    </div>
}