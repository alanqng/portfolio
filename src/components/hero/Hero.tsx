import React from 'react';
import {Section, SectionText, SectionTitle} from "../../GlobalComponents";
import {LeftSection, Img} from "./HeroStyles";

const Hero: React.FC = (props) => (
    <>
        <Section row nopadding centered>
            <LeftSection>
                <SectionTitle main>
                    Frontend Developer <br />
                    Based in Berlin
                </SectionTitle>
                <SectionText>
                    I design and build user interfaces using a wide range of technologies
                </SectionText>
                {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
            </LeftSection>
            <Img src={'/images/Alan.jpeg'} />
        </Section>
    </>
);

export default Hero;
