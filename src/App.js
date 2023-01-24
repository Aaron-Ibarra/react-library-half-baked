import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
