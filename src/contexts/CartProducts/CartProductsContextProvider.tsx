import { useContext, useEffect, useState } from "react";
import { getNotification } from "../../api/notifications/notifications";
import { getPorductsInCart } from "../../api/product/product";
import { UserContext } from "../category/user.context";
import { CartProductsContext } from "./CartProductsContext";

interface Props {
  children?: React.ReactNode;
}

const CartProductsContextProvider = ({ children }: Props) => {
  const { userToken } = useContext(UserContext);
  const [cartLength, setCartLength] = useState(0);
  const [notifcationLength, setnotifcationLength] = useState(0);

  useEffect(() => {
    let cur = true
    async function fetchPoductsInCart() {
      const data = await getPorductsInCart(userToken);
      const notifData = await getNotification(userToken)
      let cnt = 0;
      notifData.notification.forEach((item : any) => {
        if(!item.is_read) ++cnt
      })
      setnotifcationLength(cnt)
      setCartLength(data.order.product?.length);
    }
    if (userToken) {
      if(cur) fetchPoductsInCart();
    }
    return () => {
      cur = false
    }
  }, [userToken]);

  return (
    <CartProductsContext.Provider
      value={{
        cartLength,
        setCartLength: setCartLength,
        notifcationLength,
        setnotifcationLength,
      }}
    >
      {children}
    </CartProductsContext.Provider>
  );
};

export default CartProductsContextProvider;
