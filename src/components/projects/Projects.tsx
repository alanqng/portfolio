import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../GlobalComponents';
import { projects } from '../../constants/constants';

const Projects: React.FC = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <Img src={p.image} />
                        <TitleContent>
                            <HeaderThree >{p.title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                            <TitleContent>Stack</TitleContent>
                            <TagList>
                                {p.tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            {p.visit ? <ExternalLinks href={p.visit}>Code</ExternalLinks> : null}
                            {p.source ? <ExternalLinks href={p.source}>Source</ExternalLinks> : null}
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>
);

export default Projects;
