import { useState, useEffect } from 'react';
import './ExperienceSection.css'
import ExperincesServices from '../../services/ExperiencesService';

const ExperinceSection = () => {

    type Experiences = {
        id: string,
        uuid: string,
        name: string,
        category: string,
        organisation: string,
        description: string,
        start_date: string,
        end_date?: string
    }

    const [experiences, setExperiences] = useState<Experiences[]>([])

    useEffect(()=>{
        const getExperiences = async() =>{
            const result = await ExperincesServices.getExperiences();
            setExperiences(result.data)
        }

        getExperiences()
    },[])


    return (
        <section className="section" id="experience">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Where I've Contributed</div>
                <h2 className="sec-title">Experience</h2>
            </div>
            <div className="exp-grid reveal">

                {experiences.map((experience)=>{
                    return(
                    <div className="exp-card">
                    <div className="exp-type">{experience.category}</div>
                    <div className="exp-title">{experience.name}</div>
                    <div className="exp-org">{experience.organisation}</div>
                    <div className="exp-desc">{experience.description}</div>
                    <div className="exp-period">{experience.start_date} – {experience.end_date}</div>
                </div>
                    )
                })}


                <div className="exp-card">
                    <div className="exp-type">Internship</div>
                    <div className="exp-title">Data Science & Analytics Intern</div>
                    <div className="exp-org">Future Interns — Remote</div>
                    <div className="exp-desc">Built a full business sales performance analytics project using Python for data
                        preprocessing, R for statistical analysis, and React for an interactive dashboard. CIN ID:
                        FIT/MAY26/DS18653.</div>
                    <div className="exp-period">May 2026 – Jun 2026</div>
                </div>
                <div className="exp-card">
                    <div className="exp-type">Community Internship</div>
                    <div className="exp-title">Community Track Intern</div>
                    <div className="exp-org">Codetopia Community</div>
                    <div className="exp-desc">Contributing to one of Ghana's leading developer communities — supporting events,
                        content, and developer engagement across the Codetopia ecosystem.</div>
                    <div className="exp-period">Jun 2026 – Present</div>
                </div>
                <div className="exp-card">
                    <div className="exp-type">Startup · Leadership</div>
                    <div className="exp-title">CMO & Frontend Developer</div>
                    <div className="exp-org">Annotate Research Workspace</div>
                    <div className="exp-desc">Co-founder responsible for go-to-market strategy, customer research, and React frontend
                        development. Designed the brand identity and led the GTM pitch. Building the browser extension component in
                        JavaScript.</div>
                    <div className="exp-period">2024 – Present</div>
                </div>
                <div className="exp-card">
                    <div className="exp-type">Leadership · Community</div>
                    <div className="exp-title">Co-Leader, Youths For Change</div>
                    <div className="exp-org">Ashesi University</div>
                    <div className="exp-desc">Co-leading a student-driven initiative focused on digital skills training for
                        underserved communities and menstrual hygiene education outreach programs across Berekuso.</div>
                    <div className="exp-period">2024 – Present</div>
                </div>
            </div>
        </section>
    );
}

export default ExperinceSection;