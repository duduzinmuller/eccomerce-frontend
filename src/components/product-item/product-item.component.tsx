import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'

import Product from '../../types/products.types'
import CustomButton from '../custom-button/custom-button-component'
import { CartContext } from '../../contexts/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addToProductCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addToProductCart(product)
  }
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleAddToCartClick} startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>
          {' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.price)}
        </p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
