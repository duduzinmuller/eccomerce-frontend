import { useEffect, useState } from 'react'
import Category from '../../types/category.types'
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshhot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshhot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent className='categories-content'>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
