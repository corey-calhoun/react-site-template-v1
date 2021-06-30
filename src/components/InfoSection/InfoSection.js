import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


function InfoSection({ id, lightBg, imgStart, topLine, lightTxt, darkTxt, headline, description, img, buttonLabel, alt, primary, dark, dark2 }) {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightTxt={lightTxt}>{headline}</Heading>
                                <Subtitle darkTxt={darkTxt}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        to="SignUp"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img
                                    src={img}
                                    alt={alt}
                                />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;

const InfoContainer = styled.div`
    color: '#fff';
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : ' #010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`;

const Button = styled(LinkR)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center; 
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    }
`;

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spaceing: 1.4px;
    text-transorm: uppercase;
    margin-bottom: 16px;
`;

const Heading = styled.h1`
    color: #fff;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightTxt }) => (lightTxt ? '#f7f8fa' : '#010606')};

    @media screen and (max-width:480px) {
        font-size: 32px;
    }
`;

const Subtitle = styled.h4`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px; 
    color: ${({ darkTxt }) => (darkTxt ? '#010606' : '#fff')};
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;
const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    object-fit: contain;
`;
