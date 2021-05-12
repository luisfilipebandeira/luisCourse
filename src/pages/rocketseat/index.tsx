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

const Rockeseat: React.FC = () => {
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
                   <span>Conhecendo a OmniStack | Semana OmniStack 9.0</span>
                </Item>

                <Item>
                    <span>Criando a base da aplicação | Semana OmniStack 9.0</span>
                </Item>

                <FormContent onSubmit={handleSubmit}>
                    <ButtonContent href="/lessonReact">
                        Entrar
                    </ButtonContent>
                </FormContent>

            </Content>
        </Container>
        </>
    )
}

export default Rockeseat