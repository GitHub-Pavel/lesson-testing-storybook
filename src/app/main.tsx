import {createRoot} from 'react-dom/client'
import {Todo} from "@/pages/todo"
import './global.scss'

createRoot(document.getElementById('root')!).render(<Todo />)
