import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';



function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/"></FooterLink>
                            <FooterLink to="/">How It Works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">FAQ</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">LinkedIn</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/" onClick={toggleHome}>Sandbox</SocialLogo>
                        <WebsiteCopy>
                            Sandbox<MdCopyright />{new Date().getFullYear()} All rights reserved.
                        </WebsiteCopy>
                        <SocialIcons>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    background-color: #010101;
`;

const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const FooterLinkItem = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;

    @media screen and (max-width: 420px) {
       margin: 0;
       padding: 10px;
       width: 100%;
    }
`;

const FooterLinkTitle = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;


const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto 0 auto;
    max-width: 1000px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
     }
`;

const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    text-decoration: none;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

const WebsiteCopy = styled.small`
    font-size: 12px;
    margin-bottom: 10px;
    color: #fff;
`;

const SocialIcons = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-between;
`;

const SocialIconLink = styled.a`
    font-size: 16px;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;