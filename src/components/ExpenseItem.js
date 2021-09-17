import React from 'react'
import ExpenseDate from './ExpenseDate'
import '../styles/index.css'

const ExpenseItem = ({ items }) => {

  return (
    <>
      {items.map((item, id) => {
        const { title, description, amount, date } = item;
        return (
          <>
          <div key={id} className='expense-item'>
             <ExpenseDate date={date} />
          <div className="expense-item__description">{description}
            <h2>{title}</h2>
          </div>
          <div className="expense-item__price">{amount}</div>
          </div>
        </>
        )
      })}
    </>
     )
}

export default ExpenseItem

