import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}

export default App