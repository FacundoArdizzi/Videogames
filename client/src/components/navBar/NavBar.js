import React from 'react';
import SearchBar from '../searchBar/SearchBar'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { getGames } from '../../redux/actions';
import {connect} from 'react-redux'

const NavBar = ({getGames}) => {
    const handleClick = () => {
        getGames()
        if(window.location.href === 'http://localhost:3000/videogames') {
            window.location.reload()
        }
    }
    
    return (
        <div className={styles.nav}>
            <Link to='/videogames' onClick={handleClick}>
                <FontAwesomeIcon icon={ faGamepad } className={styles.icon}/>
            </Link>
            <SearchBar />
            <Link to="/create" className={styles.create}>
                <span>Crate Your Own!</span>
            </Link>
        </div>
    );
}

export default connect(
    null, 
    {getGames}
)(NavBar);