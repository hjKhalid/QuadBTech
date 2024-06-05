import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import TaskInput from './components/TaskInput';
// import TaskList from './components/TaskList';
// import WeatherDisplay from './components/WeatherDisplay';
import './App.css';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import WeatherDisplay from './component/WeatherDisplay';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Advanced To-Do Application</h1>
                <TaskInput />
                <TaskList />
                <WeatherDisplay />
            </div>
        </Provider>
    );
};

export default App;
