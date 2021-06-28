import React, { useState } from 'react';
import { connect } from 'react-redux'
import { searchGame } from '../../redux/actions'
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({searchGame}) => {
    const [game, setGame] = useState('')

    const handleChange = e => setGame(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        searchGame(game)
        setGame('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="search"
                    placeholder="Search"
                    value={game}
                    onChange={handleChange}
                />
                <button type="submit"><FontAwesomeIcon 
                    icon={faSearch}
                    style={{
                        background: "transparent",
                        color: "rgb(20, 20, 20)",
                        marginLeft: "0.5rem"
                    }}
                />
                </button>
            </form>
        </div>
    );
}

export default connect(
    null,
    {searchGame}
)(SearchBar);