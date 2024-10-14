import React from 'react'
import Title from '../../components/title'

import * as S from './styles'
import ExperienceCard from '../../components/experienceCard'

export default function Experience(){

    return (
            <S.Content id="ExperienceTag">
                    <Title>Experience</Title>   
                    <ExperienceCard 
                        icon="alpha"
                        title="Alpha Edtech"
                        subtitle="Aspiring Full Stack"
                        date="Fev, 2021 - Jun, 2022" 
                        description={
                            [
                                "HTML, CSS, JavaScript",
                                "React, Bootstrap",
                                "Node.js",
                                "PostgreSQL"
                            ]}
                         />
                     <ExperienceCard 
                        icon="driven"
                        title="Driven Education"
                        subtitle="Web Development Tutor"
                        date="2021 - 2022" 
                        description={
                            [
                                "HTML, CSS, JavaScript",
                                "React, Bootstrap",
                                "Node.js",
                                "PostgreSQL"
                            ]}
                        />
                    <ExperienceCard 
                        icon="stone"
                        title="Stone Payments"
                        subtitle="Software Engineer" 
                        date="Nov, 2021 - present" 
                        description={
                            [
                                "C#, Python, JavaScript",
                                
                            ]}
                        />
            </S.Content>
    )
}