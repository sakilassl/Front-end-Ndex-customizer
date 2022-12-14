import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Paypal from './Paypal'
import img from '../Components/Images/download.jpeg'
import Navbar from './Navbar'
const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  border-radius: 15px 15px;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 600;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 35vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const Cart = () => {
  const [count, setCount] = useState(0)
  return (
  
    <Container>
       <Navbar />
      <div className='container'>
        <Wrapper>
          <Title>YOUR ITEM</Title>
          <Top>
            <Link to={'/Shopping'}>
              <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
        
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src={img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> SHORT FROCK
                    </ProductName>
                    <ProductId>
                      <b>Ships From United States</b>
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove
                      onClick={() => {
                        if (count > 0) {
                          let temp = count - 1
                          setCount(temp)
                        }
                      }}
                    />
                    <ProductAmount>
                      {' '}
                      <Amount> {count}</Amount>
                    </ProductAmount>
                    <Add
                      onClick={() => {
                        let temp = count + 1
                        setCount(temp)
                      }}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>$ {count * 7}</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {count * 7}</SummaryItemPrice>
              </SummaryItem>
              {/* <SummaryItem>
                <SummaryItemText>Discount</SummaryItemText>
                <SummaryItemPrice>Rs -70.90</SummaryItemPrice>
              </SummaryItem> */}
              <SummaryItem type='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {count * 7}</SummaryItemPrice>
              </SummaryItem>
              <Paypal amount={count * 7}/>
            </Summary>
            
          </Bottom>
        </Wrapper>
      </div>
    </Container>
  )
}

export default Cart
