import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range of technologies in the web development world.
            From Front-end To Back-end
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <DiReact size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        React.js, Angular+2, Javascript, HTML, CSS
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiFirebase size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node(express), Databases(postgres), Python (Django, Flask), Go
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiZend size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Mobile and Cloud</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        React Native, AWS
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
        <SectionDivider colorAlt />
    </Section>
);

export default Technologies;
