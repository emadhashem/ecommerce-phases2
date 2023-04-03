export const handelResult = (str: string, len: number) => {
  let text = str.slice(0, len);
  if (str.length > len) text += "...";
  return text;
};
const sy = 'sy'
export const productCoin = (product : any) => {
  if(product.product_coin === sy) {
    return product.product_price_sy + "ل.س"
  }
  return `$ ${product.product_price_dollar}` 
}

export const productCoinInCart = (product : any) => {
  if(product.product_coin === sy) {
    return (product.product_price_sy * product.product_count) + "ل.س"
  }
  return `$ ${product.product_price_dollar * product.product_count}` 
}