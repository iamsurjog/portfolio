import { useState } from 'react'

interface Project {
    name: string
    Description: string
    tags: string[]
    Link: string
    domain: string[]
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
            className="cursor-pointer h-72 w-56 perspective-1000 group"
        >
            <div className={`relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] ${isFlipped ? 'rotate-y-180' : ''}`}>
                <div className="absolute inset-0 backface-hidden bg-transparent text-accent flex flex-col items-center justify-center p-6 border border-accent/30 shadow-[0_0_30px_rgba(36,242,206,0.15)] group-hover:shadow-[0_0_40px_rgba(36,242,206,0.25)] transition-shadow duration-300">
                    <div className="font-title text-xl font-bold text-center mb-2">
                        {project.name}
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                        {project.domain.map((d) => (
                            <span key={d} className="text-[10px] bg-background/20 px-2 py-0.5 rounded-full">
                                {d}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 text-xs opacity-60 font-medium">Click to flip</div>
                </div>
                <div className="absolute inset-0 backface-hidden bg-background text-text flex flex-col justify-center rotate-y-180 border border-accent/20 shadow-[0_0_30px_rgba(36,242,206,0.1)] p-5">
                    <p className="text-sm leading-relaxed mb-3 line-clamp-4">{project.Description}</p>
                    <div className="flex flex-wrap gap-1.5 justify-center mb-3">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-[11px] bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a
                        href={project.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:text-primary underline underline-offset-2 transition-colors text-center font-medium"
                        onClick={(e) => e.stopPropagation()}
                    >
                        View Project →
                    </a>
                </div>
            </div>
        </div>
    )
}
