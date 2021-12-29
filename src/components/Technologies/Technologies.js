import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section>
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I'm have a experience in both back-end and front-end development.
          Hands-on with C, C++, Python. Some experience with JavaScript and React, CSS, HTML
      </SectionText>
      <List>
          <ListItem>
              <DiReact size ="3rem"/>
              <ListContainer>
                  <ListTitle>Front-end</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      React.js
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size ="3rem"/>
              <ListContainer>
                  <ListTitle>Back-end</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      Node.js
                      Databases
                      MySQL
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiZend size ="3rem"/>
              <ListContainer>
                  <ListTitle>UI/UX</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      Figma
                      Adobe Photoshop
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
