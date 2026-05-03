import { useState } from 'react'

export function FlipCard() {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
        const audio = new Audio('/card_flip2.mp3')
        audio.play().catch(() => {})
    }

    return(
        <div
            onClick={handleClick}
            className="cursor-pointer h-50 w-30 perspective-1000"
        >
            <div className={`relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] ${isFlipped ? 'rotate-y-180' : ''}`}>
                <div className="absolute inset-0 backface-hidden bg-accent text-text flex items-center justify-center">
                    <Front/>
                </div>
                <div className="absolute inset-0 backface-hidden bg-accent text-text flex items-center justify-center rotate-y-180">
                    <Back/>
                </div>
            </div>
        </div>
    )
}

function Front(){
    return(
        <div>
            Front
        </div>
    )
}

function Back(){
    return(
        <div>
            Back
        </div>
    )
}
