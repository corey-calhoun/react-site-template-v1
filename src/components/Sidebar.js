import React from 'react'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';



function Sidebar({ isOpen, toggle }) {



    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="login" onClick={toggle}>
                        Log In
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarRoute to="signup">
                        Sign Up
                    </SidebarRoute>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;


const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

const SidebarWrapper = styled.div`
color: #fff;
`;

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

const SidebarLink = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

const SidebarBtn = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
`;

const SidebarRoute = styled(LinkR)`
    color: #fff;
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;