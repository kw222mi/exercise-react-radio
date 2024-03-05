import {Link} from 'react-router-dom'
import { IRoute } from "./interfaces";
import "./Header.css"
import { ChangeEvent, FormEvent, useState } from 'react';

interface IHeaderProps {
    links:IRoute[]
}

export function Header(props: IHeaderProps): JSX.Element {
    const [searchText, setSearchText] = useState<string>("")

    function handleSubmit (event:FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(event.target[0].value)

    }
    function handleSearchText(event: ChangeEvent<HTMLInputElement>): void {
        setSearchText(event.target.value)
    }

    return (
        <header className="header">
            <form onSubmit={handleSubmit}>
                <label>Sök:</label>
                <input type="text" value={searchText} onChange={handleSearchText}></input>
                <button type="submit">Sök</button>
            </form>
            <nav className="navbar">
                {props.links.map((link) => (
                        <Link className="link" to={link.path} key={link.id}>
                            {link.name}
                        </Link>
                ))}
            </nav>
        </header>
    )

}