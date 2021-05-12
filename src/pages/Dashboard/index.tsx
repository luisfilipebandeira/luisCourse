import React,{useEffect, useState} from 'react'

import {
     Container,
     Title,
     Content,
     Span,
     Strong,
     Image,
     LI,
     UnorderedList,
     ImageCourse} from './styles'

import curso1 from '../../assets/curso1.jpg';
import curso02 from '../../assets/curso02.jpg';


const Dashboard: React.FC = () => {
    return (
        <>
        <Container>
            <Title>
                Luis Courses
            </Title>
        
            <Content>
            <UnorderedList>
                    <LI>
                        <Image>
                            <a href="/mysql">
                                <ImageCourse src={curso1} />
                            </a>
                        </Image>
                        <Strong>MySql</Strong>
                        <Span>By Gustavo Guanabara</Span>
                    </LI>
                    <LI>
                        <Image>
                            <a href="/rocketseat">
                                <ImageCourse src={curso02} />
                            </a>
                        </Image>
                        <Strong>React</Strong>
                        <Span>By Rocketseat</Span>
                    </LI>

            </UnorderedList>
            </Content>
        </Container>
        </>
    )
}

export default Dashboard