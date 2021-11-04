import React from 'react';
import Theme from './Theme'
import {Layout} from "./layout/Layout";
import {Section} from "./GlobalComponents";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import Timeline from "./components/timeline/Timeline";

const App: React.FC = () => {
  return (
    <Theme>
     <Layout>
         <Section>
             <Hero/>
         </Section>
         <Projects/>
         <Technologies/>
         <Timeline />
     </Layout>
    </Theme>

  );
}

export default App;
