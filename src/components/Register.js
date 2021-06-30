import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { login } from '../features/userSlice';
import { auth } from '../firebase';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();


    const register = () => {
        if (!name) {
            return alert('Please enter your name');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    // photoUrl: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            // photoUrl: profilePic,
                        }));
                    });
            })
            .catch(error => alert(error));
    };

    return (
        <>
            <Container>
                <FormWrapper>
                    <Icon to="/">Sandbox</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormTitle>Create your free account</FormTitle>
                            <FormLabel htmlFor='for' >Name</FormLabel>
                            <FormInput
                                value={name}
                                onChange={e => setName(e.target.value)}
                                type="text"
                                placeholder="Full name (required for registration)"
                                required
                            />
                            <FormLabel htmlFor='for' >Email</FormLabel>
                            <FormInput
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <FormLabel htmlFor='for' >Password</FormLabel>
                            <FormInput
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                            <FormButton type='submit' onClick={register}>Sign In</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrapper>
            </Container>
        </>
    )
}

export default Register;

const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122 ,1) 100%
    );
`;

const FormWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

const FormTitle = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
`;

const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight; 700;
    font-size: 32px;

    @media screen and (max-widtH: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;