import { useEffect, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { FlipCard } from '#/components/FlipCard'
import { projects } from '#/data/projects'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    X,
    Code2,
    Brain,
    Globe,
    Cpu,
    Terminal,
    Sparkles,
    ArrowDown,
    Mail,
    Github,
    Linkedin,
    Database,
    Layers,
    Zap,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const Route = createFileRoute('/')({
    component: App,
})

const allDomains = Array.from(new Set(projects.flatMap((p) => p.domain))).sort()

const skills = [
    { name: 'React / Next.js', icon: Code2 },
    { name: 'Python / AI', icon: Brain },
    { name: 'TypeScript', icon: Terminal },
    { name: 'Node.js', icon: Cpu },
    { name: 'Computer Vision', icon: Globe },
    { name: 'RAG / LLM', icon: Sparkles },
    { name: 'Databases', icon: Database },
    { name: 'Linux / Wayland', icon: Layers },
    { name: 'Algorithms', icon: Zap },
]

const stats = [
    { label: 'Projects', value: '13+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Domains', value: '6' },
    { label: 'Years Coding', value: '4+' },
]

function App() {
    const heroRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const scrollHintRef = useRef<HTMLDivElement>(null)
    const sectionRefs = useRef<HTMLDivElement[]>([])
    const statsRef = useRef<HTMLDivElement[]>([])
    const floatingRef = useRef<HTMLDivElement>(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [selectedDomain, setSelectedDomain] = useState<string | null>(null)

    const filteredProjects = selectedDomain
        ? projects.filter((p) => p.domain.includes(selectedDomain))
        : projects

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 80, rotateX: -40 },
                { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power3.out' }
            )
                .fromTo(
                    subtitleRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                    '-=0.5'
                )
                .fromTo(
                    scrollHintRef.current,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                    '-=0.3'
                )

            gsap.to(scrollHintRef.current, {
                y: 10,
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })

            sectionRefs.current.forEach((ref) => {
                if (ref) {
                    gsap.fromTo(
                        ref,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: ref,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    )
                }
            })

            statsRef.current.forEach((ref) => {
                if (ref) {
                    gsap.fromTo(
                        ref,
                        { scale: 0.5, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.6,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: ref,
                                start: 'top 85%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    )
                }
            })

            gsap.to(floatingRef.current, {
                y: -100,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            })
        })

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el)
        }
    }

    return (
        <main className="relative overflow-hidden bg-background text-text">
            <div
                className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(36,242,206,0.06), transparent 40%)`,
                }}
            />

            <div ref={floatingRef} className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl motion-preset-float" />
                <div className="absolute top-1/3 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl motion-preset-float motion-delay-1000" />
                <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl motion-preset-float motion-delay-2000" />
            </div>

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(36,242,206,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(36,242,206,0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl">
                    <div className="motion-preset-slide-in-left motion-duration-1000">
                        <div className="relative">
                            <img
                                src="/pic.jpeg"
                                alt="Profile"
                                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-accent shadow-[0_0_40px_rgba(36,242,206,0.2)]"
                            />
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-accent/40" />
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent/40" />
                        </div>
                    </div>

                    <div className="text-center md:text-left">

                        <h1
                            ref={titleRef}
                            className="font-title text-5xl md:text-7xl lg:text-8xl font-bold text-accent mb-4 leading-tight"
                        >
                            Sujatro Ganguli
                        </h1>

                        <h2
                            ref={subtitleRef}
                            className="font-title text-xl md:text-2xl text-primary font-medium mb-6"
                        >
                            Full Stack Developer
                        </h2>

                        <p className="font-sans text-lg text-text/70 max-w-xl leading-relaxed mb-8">
                            Third Year Computer Science student proficient in Python, AI Engineering, and Web Development. Expert in RAG frameworks and open-source libraries. Proven leader, as Technical Head at SEDS VIT, delivering high- availability platforms and automated research software
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="/cv.pdf"
                                download
                                className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(36,242,206,0.3)]"
                            >
                                Download CV
                            </a>
                            <a
                                href="#projects"
                                className="px-6 py-3 border border-accent/40 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={scrollHintRef} className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                    <span className="text-xs text-text/40 uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-4 h-4 text-accent/50" />
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-20 px-4">
                <div ref={addToRefs} className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                ref={(el) => {
                                    if (el && !statsRef.current.includes(el)) statsRef.current.push(el)
                                }}
                                className="text-center p-6 rounded-xl border border-accent/10 bg-accent/[0.02] backdrop-blur-sm hover:border-accent/30 transition-colors duration-300"
                            >
                                <div className="font-title text-3xl md:text-4xl font-bold text-accent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-text/50 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative py-24 px-4 md:px-16">
                <div ref={addToRefs} className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-accent/50" />
                            <span className="text-sm text-accent uppercase tracking-widest font-medium">Expertise</span>
                            <div className="w-8 h-px bg-accent/50" />
                        </div>
                        <h2 className="font-title text-3xl md:text-4xl font-bold text-accent">
                            Skills & Technologies
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill) => {
                            const Icon = skill.icon
                            return (
                                <div
                                    key={skill.name}
                                    className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-accent/10 bg-accent/[0.02] hover:border-accent/30 hover:bg-accent/[0.05] transition-all duration-300 cursor-default"
                                >
                                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-text/90">{skill.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-24 px-4 md:px-16">
                <div ref={addToRefs} className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-accent/50" />
                            <span className="text-sm text-accent uppercase tracking-widest font-medium">Portfolio</span>
                            <div className="w-8 h-px bg-accent/50" />
                        </div>
                        <h2 className="font-title text-3xl md:text-4xl font-bold text-accent mb-4">
                            Featured Projects
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mb-12 px-4">
                        {allDomains.map((domain) => (
                            <button
                                key={domain}
                                onClick={() => setSelectedDomain(domain === selectedDomain ? null : domain)}
                                className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${selectedDomain === domain
                                    ? 'bg-accent text-black border-accent'
                                    : 'border-accent/40 text-text hover:border-accent hover:bg-accent/5'
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    {domain}
                                    {selectedDomain === domain &&
                                        <X className='w-4 h-4'/>
                                    }
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-6 justify-center">
                        {filteredProjects.map((project) => (
                            <FlipCard key={project.name} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-4">
                <div ref={addToRefs} className="max-w-3xl mx-auto text-center">
                    <div className="p-12 rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.03] to-secondary/[0.03] backdrop-blur-sm">
                        <Mail className="w-12 h-12 text-accent mx-auto mb-6" />
                        <h2 className="font-title text-3xl md:text-4xl font-bold text-accent mb-4">
                            Let's Connect
                        </h2>
                        <p className="text-text/60 mb-8 max-w-lg mx-auto">
                            Have a project in mind or just want to chat about tech? I'm always
                            open to interesting conversations and collaborations.
                        </p>
                        <a
                            href="mailto:sujatro.ganguli@gmail.com"
                            className="inline-block px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(36,242,206,0.3)]"
                        >
                            sujatro.ganguli@gmail.com
                        </a>
                        <div className="mt-8 flex justify-center gap-6">
                            {[
                                { icon: Github, href: 'https://github.com/iamsurjog', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/sujatro-ganguli-68429328b/', label: 'LinkedIn' },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg border border-accent/10 text-text/50 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-20" />
        </main>
    )
}
