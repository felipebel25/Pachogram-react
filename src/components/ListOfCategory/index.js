import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.fetch('https://miaugram-6jbh1mfss-felipebel25.vercel.app/categories')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setCategories(response)
        setLoading(true)
      })
  }, [])
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {!loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /> </Item>)}
      </List>
    )
  }
  return (
    <>

      {renderList()}

      {showFixed && renderList(true)}
    </>
  )
}
export const ListOfCategories = React.memo(
  ListOfCategoriesComponent

)
