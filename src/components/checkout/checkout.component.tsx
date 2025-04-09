import { FunctionComponent, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { BsBagCheck } from 'react-icons/bs'

import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal
} from './checkout.styles'
import CustomButton from '../custom-button/custom-button-component'
import CartItem from '../cart-item/cart-item.component'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>
          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <p>
          Opa! Seu carrinho está vazio. Que tal escolher algo antes de finalizar
          a compra? 🛒✨
        </p>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
