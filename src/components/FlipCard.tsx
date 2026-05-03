export function FlipCard() {
    return(
        <div className="motion-rotate-loop-120 bg-accent text-text flex justify-center align-middle h-50 w-30">
            <Front/>
            <Back/>
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
