import { FunctionComponent } from 'react'

// Utilities
import Category from '../../types/category.types'

// Styles
import { CategoryName, CategotyItemContainer } from './category-item.styles'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategotyItemContainer backgroundImage={category.imageUrl}>
      <CategoryName className='category-name'>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategotyItemContainer>
  )
}

export default CategoryItem
