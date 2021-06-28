import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './DetailAPI.module.css';

const DetailedCard = ({game}) => {
    const description = game.description.replace(/<[^>]*>?/g, '')
    
    return (
        <div>
            <div className={styles.card}>
                <img src={game.img} alt={game.name}/>
                <h2>{game.name}</h2>
                <span>{game.rating} <FontAwesomeIcon icon={faStar} style={{
                    background: 'rgb(51, 51, 51)',
                    color: '#ffbf00' 
                    }}
                /></span>   
                <p>Released: {game.released}</p>
                <p className={styles.description}>{description}</p>
                <div className={styles.platforms}>
                    {game.platforms.map((c, i) => {
                        return <p key={i}>{c}</p> 
                    })}
                </div>
            </div>
        </div>
    );
}

export default DetailedCard;