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
import { ButtonContent } from '../SignIn/styles'

import curso1 from '../../assets/curso1.jpg';


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
                            <a href="/assistir001">
                                <ImageCourse src={curso1} />
                            </a>
                        </Image>
                        <Strong>Aula 1</Strong>
                        <Span>O que é um banco de dados</Span>
                    </LI>
                    <LI>
                        <Image>
                            <a href="/assistir01">
                                <ImageCourse src={curso1} />
                            </a>
                        </Image>
                        <Strong>Aula 2</Strong>
                        <Span>Instalando o MySQL com WAMP</Span>
                    </LI>
            </UnorderedList>
            </Content>
        </Container>
        </>
    )
}

export default lessonMysql