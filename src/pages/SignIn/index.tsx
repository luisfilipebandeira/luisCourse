import React,{FormEvent, useState} from 'react'

import {
     Container,
     ImgLogo,
     Content,
     ContentText,
     FormContent,
     LabelContent,
     InputContent,
     ButtonContent,
     ButtonText} from './styles'

import { useHistory } from 'react-router-dom'

import {userSchema} from '../../Validations/userValidation';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()

        let formData = {
            email: email, 
            password: password
        }

        const isValid = await userSchema.isValid(formData)

        if(!isValid){
            alert("Seu email ou senha estão incorretos, por favor corrija eles.")
            return
        }

        history.push('/dashboard')
    }
    return (
        <>
            <Container>
                <ImgLogo>
                    <h1>Luis Courses</h1>
                </ImgLogo>

                <Content>
                    <ContentText>
                        <strong>Faça seu login</strong>
                    </ContentText>

                    <FormContent onSubmit={handleSubmit}>
                        <LabelContent></LabelContent>

                        <InputContent 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}>
                        </InputContent>

                        <InputContent 
                        type="password" 
                        placeholder="Senha" 
                        name="email"
                        value={password}
                        onChange={event => setPassword(event.target.value)}>
                        </InputContent>

                        <ButtonContent type="submit">
                          <ButtonText>Entrar</ButtonText>
                        </ButtonContent>
                        
                    </FormContent>
                </Content>
            </Container>
        </>
    )
}

export default SignIn