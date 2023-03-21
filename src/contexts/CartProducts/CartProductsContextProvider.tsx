import { useContext, useEffect, useState } from "react";
import { getPorductsInCart } from "../../api/product/product";
import { UserContext } from "../category/user.context";
import { CartProductsContext } from "./CartProductsContext";

interface Props {
  children?: React.ReactNode;
}

const CartProductsContextProvider = ({ children }: Props) => {
  const { userToken } = useContext(UserContext);
  const [cartLength, setCartLength] = useState(0);

//   useEffect(() => {
//     async function fetchPoductsInCart() {
//       const data = await getPorductsInCart(userToken);
//       setCartLength(data.order.product?.length);
//     }
//     fetchPoductsInCart();
//   });

  return (
    <CartProductsContext.Provider value={{ cartLength, setCartLength: setCartLength }}>
      {children}
    </CartProductsContext.Provider>
  );
};

export default CartProductsContextProvider;
