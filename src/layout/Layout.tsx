import React from 'react'

import { Container } from './LayoutStyles'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const Layout: React.FC = ({children}) => {
    return (
        <Container>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    )
}
