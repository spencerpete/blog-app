import './App.css';
import { Route, Switch } from 'react-router-dom';
import PostDetail from './screens/PostDetail/PostDetail';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/posts/:id" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
