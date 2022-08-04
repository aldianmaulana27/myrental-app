import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import ProductService from "../services/ProductService";
import { IoArrowForward, IoArrowBack,IoCalendarClearOutline ,IoManOutline,IoColorPaletteOutline,IoCar,IoWaterOutline} from "react-icons/io5";

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100% ;
    grid-template-rows: 30% 65% 5% ;
  }
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: scale-down;

`;

const arrowButton = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const ColumnPage1 = styled.div`
  align-items: flex-end;
  padding-top: 11rem;  
  p{
    margin-bottom: 0.2rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    grid-template-row : 100%; 
    grid-template-columns: 100%;
  }

`


const ColumnPage2 = styled.div`
  background-color: #efeff4;
  border-radius: 3%;
  padding: 1rem 1rem;
  grid-gap: 1rem;
  p{
    font-size: smaller;
  }
  th,td{
    /* border-bottom: 1px solid #ddd; */
    /* background-color: white; */
    /* padding: 5px; */
    padding-inline: 20px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    grid-template-row : 100%; 
    grid-template-columns: 100%;
  }

`
const Column = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 70px 300px 100px 180px;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem; 
  /* padding-top: 1rem; */
  grid-row-gap: 1rem;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 1rem;
    grid-template-rows: 70px 130px 220px 100px;
    grid-template-columns: 100%;
  }
`
// const ColumnRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.4;
//   padding: 3rem 3rem;
//   grid-gap: 1rem;
//   background: black;
//   color: #cd853f;

//   table,th,td{
//     border: 1px solid;
//   }

// `
const orderButton = css`
  min-width: 100px;
  max-width: 200px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 5px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  display: flex;
  position: relative;
  
justify-content: center;
align-items: center;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const PrevArrow = styled(IoArrowBack)`
  ${arrowButton}
`;
const ButtonOrder = styled.div`
 ${orderButton}
`
const NextArrow = styled(IoArrowForward)`
  ${arrowButton}
`;

const CarDetail = () => {
  const params = useParams();
  const id = params.id;
  const [products, setProducts] = useState();
  const [prod,setProd] = useState({});
  const [images, setImages] = useState([]);
  const [param, setParam] = useState('');
  useEffect(() => {
      ProductService.getProductById(id)
      .then(res => {
        setProducts(res.data.results) 
        setProd(res.data.results);
      })
      .catch(error => console.log(error));
      ProductService.getProductImageById(id)
      .then(res => {
        setImages(res.data.results) 
        console.log(res.data.results);
      })
      .catch(error => console.log(error));

    },[id]);
console.log('product '+products); 
console.log(prod);  

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  const handleClick = () => {
    window.open("http://wa.me/6285794620065");
  };

  return (
    <>
    <HeroSection id="home">
      <HeroWrapper >
      {images.map((item, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
              <HeroSlider>
                <HeroImage src={item.imageUrl} />
              </HeroSlider>
              )}
            </HeroSlide>
          );
        }) 
        }
        {images.length !==1 ? <SliderButtons >
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
        : null}
        </HeroWrapper>

      <Column >
      <ColumnPage1>
        <h2>{prod.name}</h2>
        <p>Harga Sewa</p>
        <p>{prod.weekdayPrice} /weekday</p>
        <p>{prod.weekendPrice} /weekend</p>
      </ColumnPage1>
      <ColumnPage2>
        <table>
          <thead>
            <tr>
            <td><IoCalendarClearOutline/></td>
            <td>{prod.year}</td>
            <td><IoManOutline/></td>
            <td>6</td>
            {/* </tr>
            <tr> */}
            <td><IoWaterOutline/></td>
            <td>Pertalite</td>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td><IoColorPaletteOutline/></td>
            <td>white</td>
            <td><IoCar/></td>
            <td>M</td>
            </tr>
          </tbody>
        </table>
      </ColumnPage2>
      <ColumnPage2>
      <p>Note: </p>
      <p>Toyota Avanza Veloz adalah MPV 7 seats yang hadir dengan mesin bensin kapasitas 1496 cc. Mobil ini tersedia dengan 2 jenis transmisi yaitu manual dan otomatis. Untuk kapasitas tangki bahan bakar adalah 43 liter dengan sistem suplai EFI. Avanza Veloz juga menyediakan suspensi multi link pada bagian belakang sehingga dapat menambah kenyamanan saat mengendarai mobil ini. Material insulasi dan pengoptimalan struktur body-nya juga berhasil membuat kabin lebih kedap suara.</p>
      </ColumnPage2>
          <ButtonOrder onClick={handleClick}> Pesan Sekarang </ButtonOrder>
      </Column>
    </HeroSection>

    </>
  );
};

export default CarDetail;
