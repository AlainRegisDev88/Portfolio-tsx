import { useEffect, useState } from 'react';
import './ProjectsSection.css'
import ProjectsService from '../../services/ProjectsService';

const ProjectsSection = ({ preventDefault }) => {


    type Projects = {
        id: string,
        uuid?: string,
        category: string,
        name: string,
        languages: string[],
        description: string,
        github: string,
        live: string
    }

    const [projects, setProjects] = useState<Projects[]>([])

    useEffect(() => {
        const getProjects = async () => {
            const results = await ProjectsService.getProjects();
            console.log(results && results.data)
            setProjects(results?.data)
        }
        getProjects();
    }, [])


    return (
        <section className="section" id="projects">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">What I've Built</div>
                <h2 className="sec-title">Projects</h2>
                <p className="sec-desc">From data pipelines to browser extensions — work that solves real problems and pushes my
                    technical limits.</p>
            </div>


            <div className="projects-grid reveal">
                {projects.map((project) => {
                    return (
                        <div className="project-card" key={project.id}>
                            <div className="project-img">
                                <svg className="project-img-pattern" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="p1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <circle cx="1" cy="1" r="1" fill="white" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="160" fill="url(#p1)" />
                                </svg>
                                <span style={{ position: 'relative', fontSize: '13px', color: 'var(--text2)', letterSpacing: '2px' }}>{project?.category.toUpperCase()}</span>
                            </div>
                            <div className="project-body">
                                <div className="project-tags">

                                    {project.languages.map((language) => {
                                        return (
                                            <span className="project-tag" key={language}>{language}</span>
                                        )
                                    })}

                                </div>
                                <div className="project-title">{project.name}</div>
                                <div className="project-desc">{project.description}</div>
                                <div className="project-links">
                                    {project.github && <a href="#" className="project-link" onClick={preventDefault}><svg viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg> GitHub</a>}
                                    {project.live && <a href="#" className="project-link" onClick={preventDefault}><svg viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg> Live Demo</a>}
                                </div>
                            </div>
                        </div>

                    )
                })}

                {/* <div className="project-card">
                    <div className="project-img">
                        <svg className="project-img-pattern" viewBox="0 0 400 160">
                            <defs>
                                <pattern id="p3" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <circle cx="20" cy="20" r="18" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="400" height="160" fill="url(#p3)" />
                        </svg>
                        <span style={{ position: 'relative', fontSize: '13px', color: 'var(--text2)', letterSpacing: '2px' }}>SPORTS TECH</span>
                    </div>
                    <div className="project-body">
                        <div className="project-tags"><span className="project-tag">React</span><span
                            className="project-tag">FastAPI</span><span className="project-tag">PostgreSQL</span><span
                                className="project-tag">In Progress</span></div>
                        <div className="project-title">National Team Player Monitoring App</div>
                        <div className="project-desc">A full-stack web application for tracking and monitoring national football players
                            — performance analytics, health data, and team management tools. React frontend, Python/FastAPI backend,
                            PostgreSQL database.</div>
                        <div className="project-links">
                            <a href="#" className="project-link" onClick={preventDefault}><svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg> GitHub</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default ProjectsSection;