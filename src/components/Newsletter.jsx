import { Send } from '@mui/icons-material'
import styled from 'styled-components'


const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size:50px;
margin-bottom: 10px
`;
const Description = styled.div`
font-siz:24px;
font-weight:300;
margin-bottom:20px
`;
const InputContainer = styled.div`
width:50%;
height:40;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray
`;
const Input = styled.input`
border: none;
flex:8;
padding-left: 10px
`;
const Button = styled.button`
flex:1;
border: none;
background-color: teal;
color: white;
`;



const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates for products</Description>
        <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
            <Send></Send>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter