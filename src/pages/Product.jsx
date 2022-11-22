import { Add, Remove } from "@mui/icons-material"
// import { Button } from "@mui/material"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div`



`
const Wrapper = styled.div`
padding:50px;
display:flex;

`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%
height:90vh;
object-fit:cover;


`;
const InfoContainer = styled.div`
flex:1; 
padding: 0px 50px;
`;

const Title = styled.h1`
font-weight: 300;

`;
const Desc = styled.p`
margin: 20px 0px;

`;
const Price = styled.span`
font-weight:100;
font-size:40px
`;

const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
 width: 50%
 margin: 30px 0px;


`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize = styled.select`
margin-left:10px;
padding: 5px;

`;
const FilterSizeOption = styled.option`

`;
const AddContainer= styled.div`
display:flex;
justify-content: space-between;
width: 40%;
margin-top:20px

`;
const AmountContainer = styled.div`
display:flex;
align-items-center;
font-weight:700;
`;
const Amount = styled.span`
display:flex;
 width:30px;
 height:30px;
 border-radius: 50px;
 border:1px solid teal;
 align-items:center;
 justify-content: center;
 margin: 0px 5px;
`;

const Button = styled.button`  
border: 1px solid teal;
padding:10px;
background-color: white;
cursor: pointer;
font-weight:500;
&:hover{
  background-color: teal;
}

`;

const Product = () => {
  return (
    <Container>

        <Navbar></Navbar>
        <Announcement></Announcement>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Lorem ipsum dolor</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora voluptas numquam doloribus placeat vel maxime deserunt aperiam sunt atque.     
                </Desc>
                <Price>$ 205</Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                      <FilterSizeOption>XS</FilterSizeOption>
                      <FilterSizeOption>S</FilterSizeOption>
                      <FilterSizeOption>M</FilterSizeOption>
                      <FilterSizeOption>L</FilterSizeOption>
                      <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <Remove></Remove>
                    <Amount>1</Amount>
                    <Add></Add>
                  </AmountContainer>
                  <Button>Add to cart </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default Product