  import React from "react";
  import { Link, useNavigate } from "react-router-dom";
  import styled from "styled-components";
  import { Ipxone } from "../../utils/Product.js";

  export const Products = () => {
    const navigate = useNavigate();

    function backNavigation() {
      navigate(-1);
    }

    return (
      <Div>
        <Container>
          {Ipxone.map((el) => {
            return (
              <Block key={el.id}>
                <img src={el.url} />
                <div>
                  <h3>{el.productName}</h3>
                  <MiniBlock>
                    <h4>${el.price}</h4>
                    <Buttons key={el.id} to={`${el.id}`}>
                      submit
                    </Buttons>
                  </MiniBlock>
                </div>
              </Block>
            );
          })}
        </Container>
        <ButtonGoBack onClick={backNavigation}>Go Back</ButtonGoBack>
      </Div>
    );
  };

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 89vh;
    background-color: #b4b4e9;
  `;
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 100px;
  `;

  const Block = styled.div`
    width: 220px;
    height: 350px;
    border: 2px solid #000;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    div {
      margin: 5px 0px 0 0;
      h3 {
        margin-bottom: 15px;
      }
    }
  `;
  const MiniBlock = styled.div`
    display: flex;
    gap: 35px;
  `;
  const Buttons = styled(Link)`
    width: 80px;
    height: 32px;
    background-color: yellowgreen;
    border-color: greenyellow;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    padding-bottom: 5px;
  `;
  const ButtonGoBack = styled.button`
    width: 120px;
    height: 40px;
    background-color: #00ffbf;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    margin: 30px 0 0 80px;
  `;
