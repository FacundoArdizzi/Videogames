import React, { useState } from 'react';
import { connect } from 'react-redux'
import Card from '../card/Card'
import styles from './CardsContainer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import defaultImg from '../../img/default.jpg'
import Loader from '../loader/Loader';
import Details from '../details/Details.js';

const CardsContainer = ({ loadedGames, filteredGames, detailedGame }) => {

    const [count, setCount] = useState(1)
    let num1 = 20 * (count - 1);
    let num2 = 20 * count
    
    console.log(loadedGames)
    return (
        <div>
            <div className={styles.container}>
                {filteredGames.length > 0 ? filteredGames.slice(num1, num2).map(game => <Card
                        key = {game.id}
                        id = {game.id}
                        name = {game.name}
                        img = {game.img || defaultImg}
                        genders = {game.id.length > 8 ? game.genders.map(c => c.name).join(' - ') : 
                            game.genders.join(' - ')
                        }
                />) : loadedGames.length > 0 ? loadedGames.slice(num1, num2).map( game => <Card
                        key = {game.id}
                        id = {game.id}
                        name = {game.name}
                        img = {game.img || defaultImg} 
                        genders = {game.id.length > 8 ? game.genders.map(c => c.name).join(' - ') : 
                            game.genders.join(' - ')
                        }
                        />) : <Loader />}
            </div>
            {loadedGames.length > 0 ? 
            <div className={styles.btns}>
                <button onClick={() => setCount(count - 1)} className={styles.btn}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={() => setCount(count + 1)} className={styles.btn}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div> : null}
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        loadedGames: state.loadedGames,
        filteredGames: state.filteredGames,
        detailedGame: state.detailedGame,
    }
}

export default connect(
    mapStateToProps, 
    null
)(CardsContainer);