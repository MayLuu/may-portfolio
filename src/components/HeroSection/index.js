import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, ContactButtonWrapper, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton, IconButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>

                        <HeroInnerContainer>

                            <ResumeButton download href={Bio.resume} >Check Resume</ResumeButton>

                            <ContactButtonWrapper>
                                <IconButton href={Bio.linkedin} target='_blank'>
                                    <LinkedInIcon sx={{ color: '#fff', fontSize: 40 }} />
                                </IconButton>
                                <IconButton href={Bio.github} target='_blank'>
                                    <GitHubIcon sx={{ color: '#fff', fontSize: 40 }} />
                                </IconButton>
                                <IconButton href={Bio.email} >
                                    <EmailIcon sx={{ color: '#fff', fontSize: 40 }} />
                                </IconButton>
                            </ContactButtonWrapper>
                        </HeroInnerContainer>


                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection