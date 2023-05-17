import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Ipxone } from "../../utils/Product";
export const InformationProdusts = () => {
  const params = useParams();

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const found = Ipxone.filter((element) => element.id === +params.id);
  console.log(found, "dou");
  return (
    <Container>
      {found.map((item) => {
        return (
          <Block>
            <img src={item.url} />
            <BlockCard>
              <ButtonGoBack onClick={navigateBack}>Go Back</ButtonGoBack>
              <h1>{item.productName}</h1>
              <h3>${item.price}</h3>
              <p>{item.title}</p>
            </BlockCard>
          </Block>
        );
      })}

      <h1>{params.id}</h1>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 89vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Block = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px 20px 20px 10px;
`;

const BlockCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    color: #fff;
  }
  h3 {
    color: #fff;
    margin-top: 10px;
  }
  p {
    color: #fff;
    margin-top: 10px;
  }
`;
const ButtonGoBack = styled.button`
  width: 120px;
  height: 40px;
  background-color: #00ffbf;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  /* margin: 30px 0 0 80px; */
`;
