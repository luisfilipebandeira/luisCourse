import React,{FormEvent, useEffect, useState} from 'react'

import {
     Container,
     Title,
     Content,
     Item,
     ButtonContent,
     FormContent,
     Strong,
     Image,
     LI,
     UnorderedList,
     ImageCourse} from './styles'

import { useHistory } from 'react-router-dom'

const Mysql: React.FC = () => {
    const history = useHistory()

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()

        history.push('/mysql/aulas')
    }
    return (
        <>
        <Container>
            <Title>
                Luis Courses
            </Title>
        
            <Content>
                <h1>Módulos</h1>

                <Item>
                   <span>Aula 1 - O que é um banco de dados</span>
                </Item>

                <Item>
                    <span>Aula 2a – Instalando o MySQL com WAMP</span>
                </Item>

                <FormContent onSubmit={handleSubmit}>
                    <ButtonContent href="/aulas">
                        Entrar
                    </ButtonContent>
                </FormContent>

            </Content>
        </Container>
        </>
    )
}

export default Mysql