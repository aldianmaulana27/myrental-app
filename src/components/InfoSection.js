import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductService from "../services/ProductService";
import { Button } from "./Button";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 400px;
  /* row-gap: 1rem;
  column-gap: 1rem; */
  grid-gap: 2rem;

  @media screen and (max-width: 800px) {
    padding: 0.2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px;
    grid-gap: 1rem;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 2.5rem 2rem;
  background-color: #efeff4;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  border-radius: 5%;

  h2 {
    margin-bottom: 0.2rem;
    font-size: clamp(1rem, 1.5vw, 2rem);
  }
  p {
    margin-bottom: 0.5rem;
    font-size: 15px;

    @media screen and (max-width: 768px) {
      margin-bottom: 0.5rem;
      font-size: 10px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    border-radius: 3%;

    @media screen and (max-width: 768px) {
      width: 80%;
      height: 80%;
      object-fit: cover;
      border-radius: 3%;
    }
  }
`;
const formatRupiah = (money) => {
  return new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
  ).format(money);
}
const url = (id) => {
  return "/rentals/car-detail/"+id;
}


const InfoSection = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
  ProductService.getAllProduct()
  .then(res => {
    setProducts(res.data.results) 
    console.log(res.data);
  })
  .catch(error => console.log(error));
  }, []);

  return (
    <>
    <Section id="rentals" >
    <p></p><h2 align="center" background="#fff" >Rental Car Catalog</h2>
      <Container>
        {products.map((item, index) => (
        <ColumnLeft key={index}>
            <img src={item.imageUrl} alt="home" />
            <h2 align="center">{item.name}</h2>
            <p>{formatRupiah(item.weekdayPrice)} /weekday</p>
            <p>{formatRupiah(item.weekendPrice)} /weekend</p>
            <Button to={url(item.uuid)}  primary="true">
             View Car
            </Button>
            
          </ColumnLeft>
        ))}
      </Container>
    </Section>
    </>
  );
};

export default InfoSection;
