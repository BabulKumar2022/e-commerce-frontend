import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";



const Container = styled.div`


`;
const Title = styled.h1`


`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`;
const Filter = styled.div`


`;
const FilterText = styled.span`
font-size: 20px;
font-weight:600;
margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;

`;
const Option = styled.option``
const ProductList = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Title className="text-4xl mt-2">Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>2XL</Option>
                </Select>
                </Filter>
            <Filter>
                <FilterText>Short Product:</FilterText>
                <Select>
                    <Option disabled selected>Newest</Option>
                    <Option>Price(asc)</Option>
                    <Option>Price(desc)</Option>
                </Select>
            </Filter>
            
        </FilterContainer>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default ProductList