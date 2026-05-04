import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { FlipCard } from '#/components/FlipCard'
import { projects } from '#/data/projects'
export const Route = createFileRoute('/')({
  component: App,
})

const allDomains = Array.from(new Set(projects.flatMap((p) => p.domain))).sort()

function App() {
    const [selectedDomain, setSelectedDomain] = useState<string | null>(null)

    const filteredProjects = selectedDomain
        ? projects.filter((p) => p.domain.includes(selectedDomain))
        : projects

    return(
        <main className='bg-linear-to-br from-black to-background'>
            <div className='h-screen w-screen bg-transparent text-text flex items-center justify-center px-8 md:px-16 relative'>
                <div className='max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10'>
                    <div className='motion-preset-slide-in-left motion-duration-1000'>
                        <img
                            src='/pic.jpeg'
                            alt='Profile'
                            className='w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent shadow-[0_0_40px_rgba(36,242,206,0.2)]'
                        />
                    </div>
                    <div className='hidden md:block w-px h-64 bg-secondary/30' />
                    <div className='motion-preset-slide-in-right motion-duration-1000 motion-delay-200 text-center md:text-left'>
                        <h1 className='font-title text-4xl md:text-6xl lg:text-7xl text-accent font-bold mb-4'>
                            John Doe
                        </h1>
                        <h2 className='font-title text-xl md:text-2xl text-primary font-medium mb-6'>
                            Full Stack Developer
                        </h2>
                        <p className='font-sans text-lg text-text/80 max-w-xl leading-relaxed'>
                            Passionate developer with a love for building elegant, user-centric applications.
                            Experienced in modern web technologies and always eager to learn new tools.
                            Currently crafting digital experiences that make a difference.
                        </p>
                        <a
                            href='/cv.pdf'
                            download
                            className='mt-6 inline-block px-6 py-2 bg-accent text-black font-semibold rounded-lg hover:bg-accent/80 transition'
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
            <div className='h-screen w-screen bg-transparent flex flex-col items-center justify-center font-sans gap-6'>
                <div className='flex flex-wrap gap-2 justify-center px-4'>
                    <button
                        onClick={() => setSelectedDomain(null)}
                        className={`px-3 py-1 rounded-full text-sm border transition ${
                            !selectedDomain
                                ? 'bg-accent text-black border-accent'
                                : 'border-accent/40 text-text hover:border-accent'
                        }`}
                    >
                        All
                    </button>
                    {allDomains.map((domain) => (
                        <button
                            key={domain}
                            onClick={() => setSelectedDomain(domain === selectedDomain ? null : domain)}
                            className={`px-3 py-1 rounded-full text-sm border transition ${
                                selectedDomain === domain
                                    ? 'bg-accent text-black border-accent'
                                    : 'border-accent/40 text-text hover:border-accent'
                            }`}
                        >
                            {domain}
                        </button>
                    ))}
                </div>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {filteredProjects.map((project) => (
                        <FlipCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
            <div className='h-screen w-screen bg-transparent text-text flex items-center justify-center px-8 md:px-16'>
                <div className='max-w-2xl w-full text-center'>
                    <h2 className='font-title text-4xl md:text-5xl text-accent font-bold mb-8'>
                        Get In Touch
                    </h2>
                    <p className='font-sans text-lg text-text/80 mb-10'>
                        Have a question or want to work together? Feel free to reach out.
                    </p>
                    <a
                        href='mailto:your@email.com'
                        className='inline-block px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/80 transition text-lg'
                    >
                        your@email.com
                    </a>
                    <div className='mt-10 flex justify-center gap-6'>
                        <a
                            href='https://github.com/iamsurjog'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-text/60 hover:text-accent transition'
                        >
                            GitHub
                        </a>
                        <a
                            href='https://linkedin.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-text/60 hover:text-accent transition'
                        >
                            LinkedIn
                        </a>
                        <a
                            href='https://twitter.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-text/60 hover:text-accent transition'
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
