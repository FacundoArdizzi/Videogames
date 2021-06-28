import React from 'react';
import { connect } from 'react-redux'
import { filterByGender, orderAZ, orderZA, filterByOrigin, getGames,orderByRatingAscendente,orderByRatingDescendente } from '../../redux/actions'
import styles from './SideBar.module.css'

const SideBar = ({filterByGender,orderAZ,orderZA,filterByOrigin,getGames,filteredGames,orderByRatingAscendente,orderByRatingDescendente}) => {
    const handleGenders = (e) => {
        filterByGender(e.target.value)
    }
    const handleOrderAZ = (e) => {
        orderAZ()
        getGames()
    }
    const handleOrderZA = (e) => {
        orderZA()
        getGames()
    }
    const filterOrigin = (e) => {
        filterByOrigin(e.target.value)
        if(filteredGames.length < 1) return alert('You have not created any games yet')
    }
    return (
        <div className={styles.sidebar}>
            <div>
                <h5>Genders</h5>
                <button onClick={handleGenders} value='Strategy'>Strategy</button>
                <button onClick={handleGenders} value='Action'>Action</button>
                <button onClick={handleGenders} value='RPG'>RPG</button>
                <button onClick={handleGenders} value='Shooter'>Shooter</button>
                <button onClick={handleGenders} value='Adventure'>Adventure</button>
                <button onClick={handleGenders} value='Puzzle'>Puzzle</button>
                <button onClick={handleGenders} value='Racing'>Racing</button>
                <button onClick={handleGenders} value='Sport'>Sport</button>
                <button onClick={handleGenders} value='Indie'>Indie</button>
            </div>
            <div>
                <h5>Order</h5>
                <button onClick={handleOrderAZ}>A-Z</button>
                <button onClick={handleOrderZA}>Z-A</button>
            </div> 
            <div>
                <h5>Origin</h5>
                <button onClick={filterOrigin} value='db'>My Games</button>
                <button onClick={(e) => filterByOrigin(e.target.value)} value='api'>Original Games</button>
                <button onClick={(e) => filterByOrigin(e.target.value)} value='all'>All Games</button>
            </div>     
            <div>
                <h5>Rating</h5>
                <button onClick={(e) => orderByRatingAscendente()}>Ascendente</button>
                <button onClick={(e) => orderByRatingDescendente()}>Descendente</button>
            </div>      
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filteredGames: state.filteredGames,
    }
}

export default connect(
    mapStateToProps, 
    {
        filterByGender,
        orderAZ,
        orderZA,
        filterByOrigin,
        getGames,
        orderByRatingAscendente,
        orderByRatingDescendente,
    }
)(SideBar);