import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FirstApp from './FirstApp.jsx'
import Ejer from './Ejer.jsx'
import {Challenge} from './Challenge.jsx'
import { GitGrild } from './GitGrild.jsx'
import { FetchComponent } from './FetchComponent.jsx'
import { MultipleCustom } from './MultipleCustom.jsx'
import { Father } from './Father.jsx'
import { TodoApp } from './TodoApp.jsx'
import { TodoApp1 } from './Challenge11/Components/TodoApp1.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <FirstApp/>
    <Challenge/>
    <Ejer/>
    <GitGrild/>
    <FetchComponent/>
    <MultipleCustom/>
    <Father />
    <TodoApp/>
    <TodoApp1/>
    
    
  </React.StrictMode>,
)


