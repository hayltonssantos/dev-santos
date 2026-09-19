'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Code2, Database, Download, Globe2, Layers3, Mail, Menu, Phone, Server, X } from 'lucide-react'
import { languages, getTranslation } from '@/lib/i18n'
import { LanguageProvider, useLanguage } from '@/lib/language-context'

const stackGroups = [
  { key: 'frontend', icon: Code2, items: [['HTML', 'html'], ['CSS', 'css'], ['Flexbox', 'flexbox'], ['CSS Grid', 'grid'], ['JavaScript', 'javascript'], ['React', 'react'], ['Tailwind CSS', 'tailwind'], ['Next.js', 'nextjs']] },
  { key: 'backend', icon: Server, items: [['Node.js', 'nodejs'], ['TypeScript', 'typescript'], ['APIs', 'apis'], ['Firebase', 'firebase'], ['Python', 'python']] },
  { key: 'database', icon: Database, items: [['MySQL', 'mysql'], ['MongoDB', 'mongodb'], ['Prisma', 'prisma']] },
  { key: 'tools', icon: Layers3, items: [['Git', 'git'], ['Docker', 'docker']] },
] as const

const projects = [
  { key: 'ponto_pro', number: '01', accent: 'teal', icon: '◒', visual: 'time' },
  { key: 'marca_ja', number: '02', accent: 'amber', icon: '✦', visual: 'calendar' },
  { key: 'sistema_licencas', number: '03', accent: 'blue', icon: '⌁', visual: 'license' },
] as const

function LanguageSelect() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const current = languages[language]
  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen(!open)} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-300 transition hover:border-white/25 hover:text-white" aria-expanded={open} aria-haspopup="listbox" aria-label="Select language">
        <span>{current.flag}</span><span className="hidden sm:inline">{language.toUpperCase()}</span><ChevronDown className="size-3.5" />
      </button>
      {open && <div role="listbox" aria-label="Available languages" className="absolute right-0 top-11 z-30 w-36 rounded-xl border border-white/10 bg-zinc-950 p-1 shadow-2xl">
        {(Object.keys(languages) as Array<keyof typeof languages>).map((key) => <button key={key} onClick={() => { setLanguage(key); setOpen(false) }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-zinc-400 hover:bg-white/10 hover:text-white"><span>{languages[key].flag}</span>{languages[key].name}</button>)}
      </div>}
    </div>
  )
}

function ProjectVisual({ type, accent }: { type: string; accent: string }) {
  return <div className={`project-visual visual-${accent}`} aria-hidden="true">
    <div className="visual-top"><span className="visual-dot" /><span className="visual-dot" /><span className="visual-dot" /></div>
    {type === 'time' && <><div className="visual-clock">09<span>:45</span></div><div className="visual-bars"><i /><i /><i /><i /><i /></div></>}
    {type === 'calendar' && <><div className="visual-calendar"><b>MAR</b><strong>24</strong><span>08:00&nbsp; 09:30&nbsp; 11:00</span></div><div className="visual-line" /></>}
    {type === 'license' && <><div className="visual-license"><span>LICENSE</span><b>ACTIVE</b><em>•••• 4821</em></div><div className="visual-progress"><i /></div></>}
  </div>
}

export function Portfolio() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const copy = {
    pt: { selectedWork: 'Projetos selecionados e experiência prática', tools: 'Ferramentas que uso para construir aplicações', context: 'Um pouco do meu percurso', path: 'A trajetória até aqui', focus: 'Foco', featured: 'Projeto em destaque', challenge: 'Desafio', solution: 'Solução', capabilities: 'Principais funcionalidades', noLink: 'Detalhes disponíveis em conversa', foundation: 'BASE', direction: 'DIREÇÃO ATUAL', built: 'Construído com Next.js + TypeScript', back: 'Voltar ao topo' },
    en: { selectedWork: 'Selected work and practical experience', tools: 'Tools I use to build applications', context: 'A little context', path: 'The path so far', focus: 'Focus', featured: 'Featured project', challenge: 'Challenge', solution: 'Solution', capabilities: 'Key capabilities', noLink: 'Details available on request', foundation: 'FOUNDATION', direction: 'CURRENT DIRECTION', built: 'Built with Next.js + TypeScript', back: 'Back to top' },
    es: { selectedWork: 'Proyectos seleccionados y experiencia práctica', tools: 'Herramientas que uso para crear aplicaciones', context: 'Un poco de contexto', path: 'El camino hasta ahora', focus: 'Enfoque', featured: 'Proyecto destacado', challenge: 'Desafío', solution: 'Solución', capabilities: 'Funcionalidades principales', noLink: 'Detalles disponibles al contactar', foundation: 'BASE', direction: 'DIRECCIÓN ACTUAL', built: 'Creado con Next.js + TypeScript', back: 'Volver arriba' },
  }[language]

  const nav = [ ['projects', t.nav.projects], ['stack', t.nav.stack], ['about', t.nav.about], ['experience', t.nav.experience], ['contact', t.nav.contact] ]
  return <div className="portfolio-shell">
    <header className="site-header"><div className="container header-inner">
      <a href="#home" className="brand" aria-label="dev.santos home"><span className="brand-mark">&lt;/&gt;</span><span>dev<span className="brand-dot">.</span>santos</span></a>
      <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">{nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <div className="header-actions"><LanguageSelect /><a className="header-cv" href="/cv/haylton-santos-cv.pdf" download><Download className="size-3.5" /> <span className="hidden sm:inline">{t.common.download_cv}</span></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
    </div></header>

    <main>
      <section id="home" className="hero-section"><div className="container hero-grid">
        <div className="hero-copy"><p className="eyebrow reveal"><span className="eyebrow-line" />{t.hero.greeting}</p><h1 className="hero-title reveal reveal-delay-1">Haylton<br /><span>Santos<span className="accent-dot">.</span></span></h1><p className="hero-role reveal reveal-delay-2">{t.common.title}</p><p className="hero-description reveal reveal-delay-2">{t.hero.subtitle}</p><div className="hero-actions reveal reveal-delay-3"><a href="#projects" className="button-primary">{t.hero.cta_projects}<ArrowUpRight className="size-4" /></a><a href="/cv/haylton-santos-cv.pdf" download className="button-ghost"><Download className="size-4" />{t.hero.cta_cv}</a></div><div className="social-links reveal reveal-delay-3"><a href="https://github.com/hayltonssantos" target="_blank" rel="noreferrer"><Code2 className="size-4" /> {t.hero.social_github}</a><a href="https://linkedin.com/in/hayltonssantos/" target="_blank" rel="noreferrer"><Globe2 className="size-4" /> {t.hero.social_linkedin}</a></div></div>
        <div className="hero-art"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-code-card"><span className="code-muted">01</span><span><b className="code-purple">const</b> developer <b className="code-pink">=</b> {'{'}</span><span className="code-indent"><b className="code-blue">focus</b>: <i>"frontend"</i>,</span><span className="code-indent"><b className="code-blue">growth</b>: <i>"fullstack"</i>,</span><span className="code-indent"><b className="code-blue">status</b>: <i>"learning"</i></span><span>{'}'}</span></div><div className="hero-monogram"><span>HS</span><i>AVAILABLE<br />FOR OPPORTUNITIES</i></div><div className="hero-side-label">BUILDING WITH PURPOSE <span>↗</span></div></div>
      </div><div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div></section>

      <section id="projects" className="section projects-section"><div className="container"><SectionHeading number="01" title={t.projects.title} intro={copy.selectedWork} /><article className="featured-project"><div className="featured-copy"><p className="project-kicker">{copy.featured} / 01</p><h3>{t.projects.ponto_pro.name}</h3><p className="featured-description">{t.projects.ponto_pro.description}</p><div className="featured-details"><div><span>{copy.challenge}</span><p>{language === 'pt' ? 'Simplificar o controlo de presença e a gestão de equipas e projetos.' : language === 'en' ? 'Simplify attendance tracking and team and project management.' : 'Simplificar el control de asistencia y la gestión de equipos y proyectos.'}</p></div><div><span>{copy.solution}</span><p>{t.projects.ponto_pro.problem}.</p></div></div><div className="project-tags">{t.projects.ponto_pro.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><a href="#contact" className="text-link">{copy.noLink} <ArrowUpRight /></a></div><ProjectVisual type="time" accent="teal" /></article><div className="projects-grid">{projects.slice(1).map((project) => { const item = t.projects[project.key]; return <article className={`project-card accent-${project.accent}`} key={project.key}><div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-symbol" aria-hidden="true">{project.icon}</span></div><ProjectVisual type={project.visual} accent={project.accent} /><div className="project-info"><h3>{item.name}</h3><p>{item.description}</p><div className="project-tags">{item.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><span className="project-problem"><span className="problem-label">{copy.focus}</span>{item.problem}</span><a href="#contact" aria-label={`${item.name} ${copy.noLink}`}><ArrowUpRight /></a></div></div></article> })}</div></div></section>

      <section id="stack" className="section stack-section"><div className="container"><SectionHeading number="02" title={t.stack.title} intro={copy.tools} /><div className="stack-grid">{stackGroups.map(({ key, icon: Icon, items }) => { const group = t.stack[key] as Record<string, string>; return <div className="stack-group" key={key}><div className="stack-group-title"><Icon className="size-4" /><h3>{group.title}</h3></div><div className="tech-list">{items.map(([name, descKey]) => <button key={name} className={`tech-item ${activeTech === name ? 'active' : ''}`} onClick={() => setActiveTech(activeTech === name ? null : name)}><span>{name}</span><span className="tech-arrow">↗</span>{activeTech === name && <span className="tech-tooltip">{group[descKey]}</span>}</button>)}</div></div> })}</div></div></section>

      <section id="about" className="section about-section"><div className="container about-grid"><div><SectionHeading number="03" title={t.about.title} intro={copy.context} /><div className="about-accent"><span>01</span><i /></div></div><div className="about-copy">{t.about.text.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

      <section id="experience" className="section experience-section"><div className="container"><SectionHeading number="04" title={t.experience.title} intro={copy.path} /><div className="timeline"><TimelineItem number="01" label={copy.direction} role={t.experience.it_support.role} desc={t.experience.it_support.description} first /><TimelineItem number="02" label={copy.foundation} role={t.experience.web_dev.role} desc={t.experience.web_dev.description} /><TimelineItem number="03" label="IT SUPPORT" role={t.experience.help_desk.role} desc={t.experience.help_desk.description} /><div className="education-block"><p className="timeline-label">EDUCATION</p><h3>{t.experience.education}</h3><p>{t.experience.secondary_education}</p></div></div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><div><p className="eyebrow"><span className="eyebrow-line" />05 / {t.nav.contact}</p><h2>{t.contact.title}<span className="accent-dot">.</span></h2><p>{t.contact.subtitle}</p><p className="contact-location">{t.contact.location}</p></div><div className="contact-links"><a href="mailto:aylton.souza10@gmail.com"><Mail className="size-4" /><span>{t.contact.email}</span><ArrowUpRight /></a><a href="tel:+351964337343"><Phone className="size-4" /><span>{t.contact.phone}</span><ArrowUpRight /></a><a href="https://github.com/hayltonssantos" target="_blank" rel="noreferrer"><Code2 className="size-4" /><span>{t.contact.github}</span><ArrowUpRight /></a><a href="https://linkedin.com/in/hayltonssantos/" target="_blank" rel="noreferrer"><Globe2 className="size-4" /><span>{t.contact.linkedin}</span><ArrowUpRight /></a><a href="/cv/haylton-santos-cv.pdf" download><Download className="size-4" /><span>{t.contact.cv}</span><ArrowUpRight /></a></div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><span>© {new Date().getFullYear()} Haylton Santos</span><span>{copy.built}</span><a href="#home">{copy.back} ↑</a></div></footer>
  </div>
}

function SectionHeading({ number, title, intro }: { number: string; title: string; intro: string }) { return <div className="section-heading"><div className="section-number">{number} <span /></div><h2>{title}</h2><p>{intro}</p></div> }
function TimelineItem({ number, label, role, desc, first }: { number: string; label: string; role: string; desc: string; first?: boolean }) { return <div className={`timeline-item ${first ? 'first' : ''}`}><span className="timeline-number">{number}</span><div className="timeline-marker" aria-hidden="true"><Check className="size-3" /></div><div className="timeline-content"><p className="timeline-label">{label}</p><h3>{role}</h3><p>{desc}</p></div></div> }

export function LanguageWrappedPortfolio() { return <LanguageProvider><Portfolio /></LanguageProvider> }
export default Portfolio
