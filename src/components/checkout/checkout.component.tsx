import { FunctionComponent, useContext, useState } from 'react'
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
import axios from 'axios'
import Loading from '../loading/loading.component'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseCLick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`,
        {
          products
        }
      )

      window.location.href = data.url
      console.log(data.url)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      {isLoading && <Loading />}

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>
          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButton
            startIcon={<BsBagCheck />}
            onClick={handleFinishPurchaseCLick}
          >
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
