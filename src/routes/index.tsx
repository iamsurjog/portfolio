import { createFileRoute } from '@tanstack/react-router'
import { FlipCard } from '#/components/FlipCard'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
    return(
        <main>
            <div className='h-screen w-screen font-title color-text'>
                HERO
            </div>
            <div className='h-screen w-screen font-sans'>
                <FlipCard/>
            </div>
        </main>
    )
}
