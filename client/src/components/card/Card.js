import React from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {getGameDetails} from '../../redux/actions'

const Card = ({img, name, genders, id, getGameDetails}) => {
    return (
        <div className={styles.card}>
            <div>
                <img src={img} alt={name} width='400'/>
            </div>
            <Link to='/details' onClick={() => getGameDetails(id)}>
                <h5>{name}</h5>
            </Link>
            <p>{genders}</p>
        </div>
    );
}

export default connect(
    null,
    {getGameDetails}
)(Card);