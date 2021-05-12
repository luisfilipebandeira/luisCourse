import React,{useEffect, useState} from 'react'

import {
     Container,
     ImgLogo,
     Content,
     Iframe,
     Span,
     Strong,
     Image,
     LI,
     UnorderedList,
     ImageCourse} from './styles'

import { Link, useHistory } from 'react-router-dom'
import { ButtonContent } from '../SignIn/styles'

import curso1 from '../../assets/curso1.jpg';


const Assistir: React.FC = () => {
    return (
        <>
        <Container>
            <ImgLogo>
                Luis Courses
            </ImgLogo>
        
            <Content>
            <Iframe src="https://www.youtube.com/embed/BPPWQNz2jPA" title="YouTube video player" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
            </Content>
        </Container>
        </>
    )
}

export default Assistir