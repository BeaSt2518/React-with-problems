import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div>
        <h2 className="expense-item__description" >{props.title}</h2>
        <div className="expense-item__price">{props.amount} TL</div>
      </div>
    </div>
  );
}

export default  ExpenseItem;