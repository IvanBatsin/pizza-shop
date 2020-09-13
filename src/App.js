import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Header} from './components';
import {Cart, Home} from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </div>
    </div>
  );
}

App.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.object).isRequired
}

App.defaultProps = {
  pizzas: []
}

// Подход через хуки
export default App;

// Классовы подход
// const mapStateToProps = state => {
//   return {
//     pizzas: state.pizza.items 
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     getPizzas: items => dispatch(setPizzas(items))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);