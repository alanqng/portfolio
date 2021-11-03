import React from 'react';
import Theme from './Theme'
import {Layout} from "./layout/Layout";
import {Section} from "./GlobalComponents";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Theme>
     <Layout>
         <Section>
             <Hero/>
         </Section>
         <Projects/>
     </Layout>
    </Theme>

  );
}

export default App;
