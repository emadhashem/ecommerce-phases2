export const handelResult = (str: string, len: number) => {
  let text = str.slice(0, len);
  if (str.length > len) text += "...";
  return text;
};
