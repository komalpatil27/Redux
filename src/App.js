import './App.css';
import CounterRedux from './redux/CounterRedux.jsx'
import UserInfoThunk from './reduxThunk/UserInfoThunk.jsx'
import UserInfoSaga from './reduxSaga/UserInfoSaga.jsx'
import UserInfoToolkit from './reduxToolkit/UserInfoToolkit.jsx'
import {Provider} from 'react-redux'
import counterStore from './redux/store.js';
import thunkStore from './reduxThunk/store.js';

function App() {
  return (
    <div className="App">
     <h6> Introduction of Redux</h6>
     {/* <Provider store={counterStore}>
        <CounterRedux/>
      </Provider> */}
      <Provider store={thunkStore}>
         <UserInfoThunk/>
      </Provider>
     {/* <UserInfoSaga/>
     <UserInfoToolkit/> */}
    </div>
  );
}

export default App;
