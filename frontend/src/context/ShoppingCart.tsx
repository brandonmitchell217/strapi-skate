import React from "react";
import Cart from "@/components/Cart";
import { useLocalStorage } from "usehooks-ts";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
  title: string;
  image: string;
};

type ShoppingCartContextProps = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (
    id: number,
    title: string,
    image: string,
    quantity: number
  ) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const ShoppingCartContext = React.createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
  return React.useContext(ShoppingCartContext);
}

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  // function increaseCartQuantity(id: number, title: string, image: string) {
  //   setCartItems((currItems) => {
  //     if (currItems.find((item) => item.id === id) == null) {
  //       return [...currItems, { id, quantity: 1, title, image }];
  //     } else {
  //       return currItems.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1, title, image };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // }
  function increaseCartQuantity(
    id: number,
    title: string,
    image: string,
    quantity: number
  ) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (existingItem) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity, title, image }];
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        getItemQuantity,
        increaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        setCartItems,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
