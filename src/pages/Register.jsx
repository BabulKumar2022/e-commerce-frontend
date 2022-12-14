import styled, { isStyledComponent } from "styled-components"



const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: lightblue;
display: flex;
align-items: center;
justify-content: center;

`;
const Wrapper = styled.div`
width:40%;
padding: 20px;
background-color: white;
`;
const Title = styled.h1`
font-size:30px;
font-weight:400;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Input = styled.input`
flex: 1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border:1px solid teal;


`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button= styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with th Privacy policy </Agreement>
                <Button>CREATE</Button>

            </Form>

        </Wrapper>
    </Container>
  )
}

export default Register