import styled from 'styled-components'
import backgroundImg from '../../assets/background.jpg'

export const Body = styled.div`
`

export const Container = styled.div`
  margin: 80px auto;
  max-width: 620px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImgLogo = styled.h1`
  color: white;
`

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;

  @media(max-width: 500px){
    width: 400px;
  }

  @media(max-width: 450px){
    width: 300px
  }
`

export const ContentText = styled.text`
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 30px;
`

export const ButtonContent = styled.button`
    border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;

  
  &:hover{
    background: #e14f50;
  }
`

export const Span = styled.span`
  font-size: 15px;
  color: #999;
`

export const Strong = styled.strong`
 margin-top: 10px;
  font-size: 24px;
  color: #444;
`

export const LI = styled.li`
  display: flex;
  flex-direction: column;
`

export const UnorderedList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`
export const Image = styled.div`
`

export const ImageCourse = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 5px; 
`

export const Iframe = styled.iframe`
   width: 560px;
   height: 315px;

   @media(max-width: 500px){
     width: 245px;
     height: 200px;
   }
`