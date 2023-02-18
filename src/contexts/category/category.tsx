import React, { useState } from "react";
import { CategoryContext } from "./category.context";

interface Props {
  children?: React.ReactNode
  
}
function CategoryContextProvider({ children } : Props) {
  const [id, setid] = useState(0);
  return (
    <CategoryContext.Provider value={{ id, setId: setid }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
