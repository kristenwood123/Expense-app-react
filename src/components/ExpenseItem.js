import React from 'react'
import '../styles/index.css'

const ExpenseItem = ({ items }) => {


  return (
    <div className='expense-item'>
      {items.map((item, id) => {
      const { title, description, amount, date } = item;
        const month = date.toLocaleString('en-US', { month: 'long'})
        const year = date.getFullYear()
        const day = date.toLocaleString('en-US', { day: '2-digit'})
        return (
          <>
          <div key={id}>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
          </div>
          <div className="expense-item__description">{description}
            <h2>{title}</h2>
          </div>
          <div className="expense-item__price">{amount}</div>
        
        </>
        )
      })}
    </div>
     )
}

export default ExpenseItem

