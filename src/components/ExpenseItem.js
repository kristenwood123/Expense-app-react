import React from 'react'
import '../styles/index.css'

const ExpenseItem = ({ items }) => {

  return (
    <div className='expense-item'>
      {items.map((item, id) => {
        return <h1>{item.title}</h1>
      })}
    </div>
     )
}

export default ExpenseItem

