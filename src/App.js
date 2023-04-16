import { Route, Routes } from 'react-router-dom'
import Featured from './cmps/featured'
import List from './cmps/list'
import Navbar from './cmps/navbar'

import routes from './routes'
import "./styles/main.scss"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <Routes>
                {routes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component} />
                )}
            </Routes>

        </div>
    );
}

export default App;
