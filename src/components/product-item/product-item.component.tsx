import { FunctionComponent } from 'react'

import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'

import Product from '../../types/products.types'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

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
