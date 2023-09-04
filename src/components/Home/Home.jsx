import Header from "../Header/Header";
import Card from "../Cards/Card";

import { Container } from "@mui/material";

function Products(id, name, price, qty) {
  (this.id = id), (this.name = name), (this.price = price), (this.qty = qty);
}
const productList = [];

for (let i = 0; i < 50; i++) {
  let product = new Products(`ID#${i}`, `Item${i}`, i + 50, 0);
  productList.push(product);
}

export default function Home() {
  return (
    <div className="homeComponent">
      <Header></Header>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {productList.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              qty={product.qty}
            />
          );
        })}
      </Container>
    </div>
  );
}
