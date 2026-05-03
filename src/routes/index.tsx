import { createFileRoute } from '@tanstack/react-router'
import { FlipCard } from '#/components/FlipCard'
import data from '#/data/projects.json'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
    return(
        <main className='bg-background'>
            <div className='h-screen w-screen bg-linear-to-b from-black to-background text-text flex items-center justify-center px-8 md:px-16 relative'>
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
                    </div>
                </div>
            </div>
            <div className='h-screen w-screen bg-transparent flex items-center justify-center font-sans'>
                <FlipCard/>
            </div>
        </main>
    )
}
