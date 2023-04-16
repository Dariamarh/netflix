// import {Home} from './pages/home.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { HeaderDetails } from './cmps/header-details.jsx'
import { SecondPage } from './cmps/second-page.jsx'

export function App() {
    return <section className="app">
        <header>
        </header>
        <main>
            <AppHeader />
            <HeaderDetails />
            <SecondPage />

        </main>
    </section>
}