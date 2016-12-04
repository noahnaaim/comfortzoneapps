import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../reducers'
import App from '../components/App'

let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}