import React from 'react'

import { Container } from './LayoutStyles'
import Header from "../components/Header";

export const Layout: React.FC = ({children}) => {
    return (
        <Container>
            <Header />
            <main>{children}</main>
            <div>
                Footer
            </div>
        </Container>
    )
}
