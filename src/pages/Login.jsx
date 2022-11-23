// import { Link } from "@mui/icons-material";
import styled from "styled-components"



const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: lightblue;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
width:30%;
padding: 20px;
background-color: white;
`;
const Title = styled.h1`
font-size:30px;
font-weight:400;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width:40%;
margin: 10px 0px;
padding: 10px;
border:1px solid teal;
`;

const Button= styled.button`
width: 40%;
border: none;
padding: 10px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;
const Link = styled.div`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>

            <Title>LOGIN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT YOUR REMEMBER THE PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login