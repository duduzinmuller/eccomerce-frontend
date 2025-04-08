import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'
import CustomButton from '../custom-button/custom-button-component'
import { CartContext } from '../../contexts/cart.context'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* Produtos */}

        <CartTotal>Total: R$999</CartTotal>
        <CustomButton startIcon={<BsCartCheck />}>
          Ir para o Checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
