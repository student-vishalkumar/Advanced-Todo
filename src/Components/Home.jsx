
import TaskList from "./taskList"
import TodoInput from "./todoInput"
import { useSelector } from "react-redux" 

export const Home = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    console.log('isAuth', isAuthenticated)
    return (
        isAuthenticated && <div>
            <TodoInput/>
            <TaskList/>
        </div>
    )
}