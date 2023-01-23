import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  <Switch>
    <Route exact path="/books" component={BookList} />
    <Route exact path="/books/:id" component={BookDetail} />
  </Switch>;
  return (
    <main className="container">
      <h1>Library Catalog</h1>
    </main>
  );
}

export default App;
