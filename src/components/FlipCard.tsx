import { useState } from 'react'

interface Project {
    name: string
    Description: string
    tags: string[]
    Link: string
}

export function FlipCard({ project }: { project: Project }) {
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
                    <Front name={project.name}/>
                </div>
                <div className="absolute inset-0 backface-hidden bg-accent text-text flex items-center justify-center rotate-y-180">
                    <Back project={project}/>
                </div>
            </div>
        </div>
    )
}

function Front({ name }: { name: string }){
    return(
        <div className="font-title text-lg font-bold text-center px-2">
            {name}
        </div>
    )
}

function Back({ project }: { project: Project }){
    return(
        <div className="px-2 py-1 text-center">
            <p className="text-xs mb-1 line-clamp-3">{project.Description}</p>
            <div className="flex flex-wrap gap-1 justify-center mb-1">
                {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-black/20 px-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>
            <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline hover:text-primary"
                onClick={(e) => e.stopPropagation()}
            >
                Link
            </a>
        </div>
    )
}
