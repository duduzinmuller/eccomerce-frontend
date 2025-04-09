import { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'
import { UserContextProviderProps } from './user.context'
import Product from '../types/products.types'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addToProductCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addToProductCart: () => {}
})

const CartContextProvider: FunctionComponent<UserContextProviderProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addToProductCart = (product: Product) => {
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addToProductCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
