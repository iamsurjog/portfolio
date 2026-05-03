import { createFileRoute } from '@tanstack/react-router'
import { FlipCard } from '#/components/FlipCard'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
    return(
        <main>
            <div className='h-screen w-screen bg-background text-text flex items-center justify-center px-8 md:px-16'>
                <div className='max-w-6xl w-full flex flex-col md:flex-row items-center gap-12'>
                    <div className='motion-preset-slide-in-left motion-duration-700'>
                        <img
                            src='/pic.jpeg'
                            alt='Profile'
                            className='w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent'
                        />
                    </div>
                    <div className='motion-preset-slide-in-right motion-duration-700 text-center md:text-left'>
                        <h1 className='font-title text-4xl md:text-6xl text-accent mb-4'>
                            John Doe
                        </h1>
                        <h2 className='font-title text-xl md:text-2xl text-primary mb-6'>
                            Full Stack Developer
                        </h2>
                        <p className='font-sans text-lg text-text max-w-lg'>
                            Passionate developer with a love for building elegant, user-centric applications.
                            Experienced in modern web technologies and always eager to learn new tools.
                            Currently crafting digital experiences that make a difference.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-screen w-screen bg-background flex items-center justify-center font-sans'>
                <FlipCard/>
            </div>
        </main>
    )
}
