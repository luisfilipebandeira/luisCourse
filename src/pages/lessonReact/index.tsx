import React,{useEffect, useState} from 'react'

import {
     Container,
     ImgLogo,
     Content,
     Span,
     Strong,
     Image,
     LI,
     UnorderedList,
     ImageCourse} from './styles'

import { Link, useHistory } from 'react-router-dom'

import curso02 from '../../assets/curso02.jpg';


const lessonMysql: React.FC = () => {
    return (
        <>
        <Container>
            <ImgLogo>
                Luis Courses
            </ImgLogo>
        
            <Content>
            <UnorderedList>
                    <LI>
                        <Image>
                            <a href="/assistir002">
                                <ImageCourse src={curso02} />
                            </a>
                        </Image>
                        <Strong>Aula 1</Strong>
                        <Span>Conhecendo a OmniStack | Semana OmniStack 9.0</Span>
                    </LI>
                    <LI>
                        <Image>
                            <a href="/assistir02">
                                <ImageCourse src={curso02} />
                            </a>
                        </Image>
                        <Strong>Aula 2</Strong>
                        <Span>Criando a base da aplicação | Semana OmniStack 9.0</Span>
                    </LI>
            </UnorderedList>
            </Content>
        </Container>
        </>
    )
}

export default lessonMysql