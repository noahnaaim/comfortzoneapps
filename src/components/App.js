import React from 'react'
import '../App.css'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'


const App = () => (
    <div className="App">
        <Header />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App