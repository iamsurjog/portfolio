import { useEffect, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
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
  Twitter,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const Route = createFileRoute('/about')({
  component: About,
})

const skills = [
  { name: 'React / Next.js', level: 90, icon: Code2 },
  { name: 'Python / AI', level: 85, icon: Brain },
  { name: 'TypeScript', level: 88, icon: Terminal },
  { name: 'Node.js', level: 80, icon: Cpu },
  { name: 'Computer Vision', level: 75, icon: Globe },
  { name: 'RAG / LLM', level: 82, icon: Sparkles },
]

const stats = [
  { label: 'Projects', value: '13+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Domains', value: '6' },
  { label: 'Years Coding', value: '4+' },
]

function About() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<HTMLDivElement[]>([])
  const skillBarsRef = useRef<HTMLDivElement[]>([])
  const statsRef = useRef<HTMLDivElement[]>([])
  const floatingRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
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

      // Scroll hint bounce
      gsap.to(scrollHintRef.current, {
        y: 10,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Section reveals
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

      // Skill bar animations
      skillBarsRef.current.forEach((ref, i) => {
        if (ref) {
          const bar = ref.querySelector('.skill-bar-fill') as HTMLElement
          if (bar) {
            gsap.fromTo(
              bar,
              { width: '0%' },
              {
                width: bar.dataset.width,
                duration: 1.2,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: ref,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            )
          }
        }
      })

      // Stats counter animation
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

      // Floating elements parallax
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
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(36,242,206,0.06), transparent 40%)`,
        }}
      />

      {/* Floating background orbs */}
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
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(36,242,206,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(36,242,206,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative z-10 text-center max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent/80 font-medium">Get to know me</span>
          </div>

          <h1
            ref={titleRef}
            className="font-title text-5xl md:text-7xl lg:text-8xl font-bold text-accent mb-6 leading-tight"
          >
            About Me
          </h1>

          <p
            ref={subtitleRef}
            className="font-sans text-lg md:text-xl text-text/70 max-w-2xl mx-auto leading-relaxed"
          >
            A passionate developer who thrives on turning complex problems into
            elegant, user-centric solutions. From AI-powered tools to seamless
            web experiences.
          </p>
        </div>

        <div ref={scrollHintRef} className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-xs text-text/40 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-accent/50" />
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 px-4 md:px-16">
        <div ref={addToRefs} className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-accent/50" />
                <span className="text-sm text-accent uppercase tracking-widest font-medium">My Story</span>
              </div>
              <h2 className="font-title text-3xl md:text-4xl font-bold text-accent mb-6">
                Building the future, one line at a time
              </h2>
              <div className="space-y-4 text-text/70 leading-relaxed">
                <p>
                  I'm a full-stack developer with a deep fascination for artificial intelligence
                  and systems programming. My journey started with curiosity and evolved into
                  a passion for creating tools that make a real difference.
                </p>
                <p>
                  From building RAG pipelines that reduce indexing time from hours to seconds,
                  to crafting Wayland-optimized desktop applications with zero idle CPU usage —
                  I love pushing the boundaries of what's possible.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new algorithms, contributing
                  to open-source projects, or diving into the latest developments in AI research.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-accent/20 shadow-[0_0_60px_rgba(36,242,206,0.1)]">
                <img
                  src="/pic.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-accent/40" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent/40" />
            </div>
          </div>
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

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  ref={(el) => {
                    if (el && !skillBarsRef.current.includes(el)) skillBarsRef.current.push(el)
                  }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-text/90">{skill.name}</span>
                    </div>
                    <span className="text-sm text-accent/70 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-accent/10 rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-secondary to-accent"
                      data-width={`${skill.level}%`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="relative py-24 px-4 md:px-16">
        <div ref={addToRefs} className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-accent/50" />
              <span className="text-sm text-accent uppercase tracking-widest font-medium">Focus Areas</span>
              <div className="w-8 h-px bg-accent/50" />
            </div>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-accent">
              What I Do
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI & Machine Learning',
                desc: 'Building RAG pipelines, sentiment analysis tools, and computer vision applications that push the boundaries of what machines can understand.',
                icon: Brain,
              },
              {
                title: 'Web Development',
                desc: 'Crafting high-performance, accessible web applications with modern frameworks like React, Next.js, and TanStack Router.',
                icon: Globe,
              },
              {
                title: 'Systems & Tools',
                desc: 'Developing lightweight desktop applications and CLI tools optimized for Linux environments with minimal resource usage.',
                icon: Terminal,
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group p-8 rounded-2xl border border-accent/10 bg-accent/[0.02] hover:border-accent/30 hover:bg-accent/[0.05] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-title text-xl font-semibold text-accent mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text/60 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              )
            })}
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
              href="mailto:your@email.com"
              className="inline-block px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(36,242,206,0.3)]"
            >
              your@email.com
            </a>
            <div className="mt-8 flex justify-center gap-6">
              {[
                { icon: Github, href: 'https://github.com/iamsurjog', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
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

      {/* Footer spacer */}
      <div className="h-20" />
    </main>
  )
}
