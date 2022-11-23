
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`

`;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.h1`
font-weight:500;
text-align: center

`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Bottom = styled.div`

`;
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor: pointer;
border: ${props=> props.type === "filled"  &&  "none"}
background: ${props=> props.type === "filled"  &&  "none"}
color: ${props=> props.type === "filled"  &&  "none"}
color:
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration: underline;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>    
            <Wrapper>
                <Title className='text-3xl'>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (2)</TopText>
                            <TopText>Your Wishlist (1)</TopText>
                        </TopTexts>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom></Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart 