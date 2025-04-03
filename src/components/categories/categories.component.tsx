import { useEffect, useState } from 'react'
import Category from '../../types/category.types'
import axios from 'axios'
import env from '../../config/env.config'
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '6228f52eb7e6cb904bbe0111',
      name: 'hats',
      displayName: 'Chapéus',
      imageUrl:
        'https://images.unsplash.com/photo-1511231115599-3edad51208c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: '6228f760b7e6cb904bbe012e',
      name: 'sneakers',
      displayName: 'Tênis',
      imageUrl:
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: '6228fc5cb7e6cb904bbe014b',
      name: 'jackets',
      displayName: 'Jaquetas',
      imageUrl:
        'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: '6228fdd8b7e6cb904bbe0162',
      name: 'female',
      displayName: 'Feminino',
      imageUrl:
        'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: '623064ee22376f1e6b869471',
      name: 'male',
      displayName: 'Masculino',
      imageUrl:
        'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    }
  ])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
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
