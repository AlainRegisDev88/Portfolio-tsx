import './SkillsSection.css'
import { useEffect, useState } from 'react';
import skillsServices from '../../services/skillsServices';

type Skill = {
    uuid?: string;
    name: string;
    category: string;
    proficiency: number;
    currently_learning?: boolean;
};

const formatCategory = (category: string) =>
    category
        .replaceAll('_', ' ')
        .replace(/\band\b/i, '&')
        .replace(/\b\w/g, (letter) => letter.toUpperCase());

const SkillsSection = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const getSkills = async () => {
            const result = await skillsServices.getSkills();
            setSkills(result.data);
        };

        getSkills();
    }, []);

    const groupedSkills = skills.reduce<Record<string, Skill[]>>((groups, skill) => {
        (groups[skill.category] ??= []).push(skill);
        return groups;
    }, {});

    return (
        <section className="section" id="skills">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Technical Arsenal</div>
                <h2 className="sec-title">Skills</h2>
                <p className="sec-desc">
                    A growing toolkit built through coursework, internships, and self-directed learning - all in
                    service of building intelligent systems.
                </p>
            </div>

            <div className="skills-grid reveal">
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <div className="skill-cat" key={category}>
                        <div className="skill-cat-title">{formatCategory(category)}</div>

                        {categorySkills.map((skill) => (
                            <div className="skill-bar-item" key={skill.uuid ?? skill.name}>
                                <div className="skill-bar-label">
                                    <span>{skill.name}</span>
                                    <span>{skill.proficiency}%</span>
                                </div>
                                <div className="skill-bar-track">
                                    <div
                                        className="skill-bar-fill"
                                        style={{ width: `${skill.proficiency}%` }}
                                    />
                                </div>
                                <div></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillsSection;
