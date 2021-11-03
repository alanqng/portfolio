import React from 'react';
import Theme from './Theme'
import {Layout} from "./layout/Layout";
import {Section} from "./GlobalComponents";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <Theme>
     <Layout>
         <Section>
             <Hero/>
         </Section>
     </Layout>
    </Theme>

  );
}

export default App;
