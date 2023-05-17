import { Route, Routes } from "react-router-dom";
import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { MyCart } from "../my-card/MyCart";
import { MyOrders } from "../my-orders/MyOrders";
import { InformationProdusts } from "../product/InformationProdusts";
import { Products } from "../product/Products";
export function GlobalPage() {
  return (
    <div>
      <Header />
      <Routes>
        <Route />
        <Route index path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<InformationProdusts />} />
        <Route path="/my-card" element={<MyCart />} />
        <Route path="/my-order" element={<MyOrders />} />
      </Routes>
    </div>
  );
}
