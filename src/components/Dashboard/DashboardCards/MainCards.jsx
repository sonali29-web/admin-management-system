import React from 'react'
import TotalEmployees from './TotalEmployees'
import TotalDepartment from './TotalDepartment'
import ActiveEmployee from './ActiveEmployee'
import NewEmployees from './NewEmployees'

const MainCards = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-6'>
      <TotalEmployees></TotalEmployees>
      <TotalDepartment></TotalDepartment>
      <ActiveEmployee></ActiveEmployee>
      <NewEmployees></NewEmployees>
    </div>
  )
}

export default MainCards;