import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterContainer = styled.div`
padding: Screm calc((100vw-1100px)/2);
display: grid;
grid-template-columns: repeat(2,1fr);
color: #000;
background: #fafafb;
`
const FooterLinkWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2 ,1fr);

@media screen and (max-width: 820px){
    grid-template-columns : 1fr;
}
`
const FooterDesc = styled.div`
padding: 0 2rem;
h1{
    margin-bottom: 3rem;
    color: #f26a2e
}

@media screen and (max-width: 400px) {
    padding: 1rem;
}
`
const FooterLinkItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 400px) {
    pad: 1rem;
}
`
const FooterLinkTittle = styled.h2`
font-size: 14px;
margin-bottom: 16px;
`
const FooterLink= styled(Link)`
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
color: #3d3d4e;

&:hover{
    color: #f26a2e;
    transition: 0.3s ease-out;
}
`

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLinkWrapper>
            <FooterDesc>
                <h1>RentCar</h1>
                <p>Rental in here and feel better</p>
            </FooterDesc>
            <FooterLinkItem>
                <FooterLinkTittle>Contact Us</FooterLinkTittle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Service</FooterLink>
            </FooterLinkItem>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
            <FooterLinkItem>
                <FooterLinkTittle>Car Rental</FooterLinkTittle>
                <FooterLink to="/">Honda</FooterLink>
                <FooterLink to="/">Toyota</FooterLink>
                <FooterLink to="/">Daihatsu</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
                <FooterLinkTittle>Social Media</FooterLinkTittle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/home">Facebook</FooterLink>
                <FooterLink to="/Rentals">Twitter</FooterLink>
            </FooterLinkItem>
        </FooterLinkWrapper>
    </FooterContainer>

  )
}

export default Footer