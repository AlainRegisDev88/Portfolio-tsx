import EducationServices from '../../services/EducationServices';
import './EducationSection.css'
import { useState, useEffect } from 'react';

const EducationSection = () => {

    const getYear = (date: string | null | undefined) =>{
        if(!date) return "Present"

        const newDate = new Date(date.replace('/-/g', '/'))

        return newDate.toLocaleDateString('en-US', {
            year: 'numeric'
        })
    }

    type Education = {
        id: string,
        uuid: string,
        school: string,
        program: string,
        location: string,
        status: string,
        start_date: string,
        end_date: string,
        coursework: string[]
    }
    const [education, setEducation] = useState<Education[]>([]);

    useEffect(()=>{

        const getEducation = async() =>{
            const result = await EducationServices.getEducation();
            setEducation(result.data)
        }
        getEducation()
        
    },[])

    return (
        <section className="section" id="education">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Academic Foundation</div>
                <h2 className="sec-title">Education</h2>
            </div>
            <div className="edu-cards reveal">
                {education.map((course) =>{
                    return(
                        <div className="edu-card">
                    <div className="edu-degree">{course.program} · {getYear(course.start_date)} – {getYear(course.end_date)}</div>
                    <div className="edu-school">{course.school}</div>
                    <div className="edu-detail" style={{ color: 'var(--text2)' }}>{course.location}</div>
                    <div className="edu-detail" style={{ color: 'var(--text3)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>{course.status}</div>
                    <div className="edu-courses">
                        <div className="courses-label">Relevant Coursework</div>
                        {course.coursework.map((category)=>{
                            return(
                                <span className="course-tag">{category}</span>
                            )
                        })}
                    </div>
                </div>
                    )
                })}
            </div>
        </section>
    );
}

export default EducationSection;