import { Route, Routes } from 'react-router-dom'
import Featured from './cmps/featured'
import List from './cmps/list'
import Navbar from './cmps/navbar'
import Watch from './cmps/watch'
import Register from './cmps/register'
import Login from './cmps/login'

import routes from './routes'
import "./styles/main.scss"

function App() {
    return (
        <div className="App">
            {/* <Navbar />
            <Featured />
            <List />
            <List />
            <List /> */}
            {/* <Watch/> */}
            {/* <Register/> */}
            <Login/>
            <Routes>
                {routes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component} />
                )}
            </Routes>

        </div>
    );
}

export default App;
