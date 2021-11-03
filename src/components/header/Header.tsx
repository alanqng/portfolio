import React from 'react'
import {Container, Div1, Div2, Div3, NavLink, SocialIcons} from "./HeaderStyles";
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, DiCssdeck} from "react-icons/all";

const Header: React.FC = () => (
    <Container>
        <Div1>
                <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
                    <DiCssdeck size="3rem" /> <span>Alan Ng</span>
                </a>
        </Div1>
        <Div2>
            <li>
                    <NavLink href="#projects">Projects</NavLink>
            </li>
            <li>
                    <NavLink href="#tech">Technologies</NavLink>
            </li>
            <li>
                    <NavLink href="#about">About</NavLink>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://google.com">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
        </Div3>
    </Container>
)

export default Header
