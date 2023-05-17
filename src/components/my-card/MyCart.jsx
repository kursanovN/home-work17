import React from "react";
import styled from "styled-components";
const macbook = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLU0naWzbfGgzqViSEiUjy1UB9QEGrvRuQvbJAXBSMtEQx8RbZbPMkF3n_HV1SreoEac&usqp=CAU",
    productName: "Ipxone 14 pro",
    price: "1320",
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfVvN9FsQDYehBseN2H28K0a7ijeIeSAbHRUn4hJr44aievq-trUvtQV3QEQ0zxmuaXk&usqp=CAU",
    productName: "Ipxone 14 pro",
    price: "1320",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZv1xsWJKr5yiX794g6AduPDCBRUPvH27lQuXEoTOVUcJms_ZfDEGIKV0X3XtetVtUlYk&usqp=CAU",
    productName: "Ipxone 14 pro",
    price: "1320",
  },
  {
    id: 4,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNikdU4ENOFRiWen6J7TUDk7awU8Zl65rN0vUm6TdA9YkDIDFGRqBdQ41ya-_LJQG-UM&usqp=CAU",
    productName: "Ipxone 14 pro",
    price: "1320",
  },
];
export const MyCart = () => {
  return (
    <Container>
      {macbook.map((el) => {
        return (
          <Block key={el.id}>
            <img src={el.url} />
            <h3>{el.productName}</h3>
            <h4>${el.price}</h4>
            <Buttons>submit</Buttons>
          </Block>
        );
      })}
      <ButtonGoBack>Go Back</ButtonGoBack>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 89vh;
  background-color: #b4b4e9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Block = styled.div`
  width: 350px;
  height: 350px;
  border: 2px dashed #000;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;

  h3 {
    margin: 15px 0;
  }
`;
const Buttons = styled.button`
  width: 80px;
  height: 30px;
  background-color: yellowgreen;
  border-color: greenyellow;
  border-radius: 6px;
  margin: 10px 0;
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
