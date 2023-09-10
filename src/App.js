import Expenses from './components/Expenses.js';

function App(){

  const expenses = [
    {
      id:'e1',
      title:'Car Insurance',
      amount: 100,
      date: new Date(2021, 2, 26)
    },
    {
      id:'e2',
      title:'New Desk (Wooden)',
      amount: 100,
      date: new Date(2021, 2, 26)
    },
    {
      id:'e2',
      title:'New TV',
      amount: 100,
      date: new Date(2021, 2, 26)
    }
  ];
  
  return(
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
