import React from 'react'

import { Container } from './LayoutStyles'

export const Layout: React.FC = ({children}) => {
    return (
        <Container>
            <div>
                Header
            </div>
            <main>{children}</main>
            <div>
                Footer
            </div>
        </Container>
    )
}
