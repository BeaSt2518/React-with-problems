import './ExpenseItem.css'

function ExpenseItem(props) {
    const month = props.date.toLocaleString('tr-TR' , {month: 'long'});
    const day = props.date.toLocaleString('tr-TR' , {day: '2-digit'}); 
    const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div>
        <h2 className="expense-item__description" >{props.title}</h2>
        <div className="expense-item__price">{props.amount} TL</div>
      </div>
    </div>
  );
}

export default  ExpenseItem;