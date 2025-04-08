import { FunctionComponent } from 'react'

// Utilities
import Category from '../../types/category.types'

// Styles
import { CategoryName, CategotyItemContainer } from './category-item.styles'
import { useNavigate } from 'react-router-dom'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }
  return (
    <CategotyItemContainer backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategotyItemContainer>
  )
}

export default CategoryItem
