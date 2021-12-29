import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href="tell:541-829-3905">541-829-3905</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href="mailto:bazarkua@oregonstate.edu">contact me</LinkItem>
            </LinkColumn>
            <CompanyContainer>
                <Slogan>Work hard to pursue mastery</Slogan>
            </CompanyContainer>
            <SocialContainer>
            <SocialIcons href="https://google.com">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://google.com">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://google.com">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            </SocialContainer>
        </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
