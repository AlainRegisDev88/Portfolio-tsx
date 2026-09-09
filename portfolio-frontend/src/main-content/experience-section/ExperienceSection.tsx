import { useState, useEffect } from 'react';
import './ExperienceSection.css'
import ExperincesServices from '../../services/ExperiencesService';

const ExperinceSection = () => {

    const formatDate = (date: string | null | undefined) => {

        if (!date) return 'Present'
        // const [day, month, year] = date.split("-").map(Number);

        // const newDate = new Date(year, month - 1, day);

        const newDate = new Date(date?.replace('/-/g', '/'));

        return newDate.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        })
    }

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

    useEffect(() => {
        const getExperiences = async () => {
            const result = await ExperincesServices.getExperiences();
            setExperiences(result.data)
        }

        getExperiences()
    }, [])


    return (
        <section className="section" id="experience">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Where I've Contributed</div>
                <h2 className="sec-title">Experience</h2>
            </div>
            <div className="exp-grid reveal">

                {experiences.map((experience) => {
                    return (
                        <div className="exp-card">
                            <div className="exp-type">{experience.category}</div>
                            <div className="exp-title">{experience.name}</div>
                            <div className="exp-org">{experience.organisation}</div>
                            <div className="exp-desc">{experience.description}</div>
                            <div className="exp-period">{formatDate(experience.start_date)} – {formatDate(experience.end_date)}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default ExperinceSection;