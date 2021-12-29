import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hello friend! My Name is Adilbek!
                Welcome to my personal website!
            </SectionTitle>
            <SectionText>
                I'm actively looking for an intership SDE opportunity!
            </SectionText>
            <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
        </LeftSection>

    </Section>
);

export default Hero;