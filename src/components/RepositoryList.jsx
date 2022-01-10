import { RepositoryItem } from './RepositoryItem'

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://www.google.com.br'
}

export function RepositoryList() {
    return (
        <section>
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    ) 
}