import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Card from '../card/Card'
import styles from './CardsContainer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import defaultImg from '../../img/default.jpg'
import Loader from '../loader/Loader';

const CardsContainer = () => {
    const loadedGames = useSelector(state => state.loadedGames)
    const filteredGames = useSelector(state => state.filteredGames)

    const [count, setCount] = useState(1)
    let num1 = 20 * (count - 1);
    let num2 = 20 * count
    
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

export default CardsContainer;