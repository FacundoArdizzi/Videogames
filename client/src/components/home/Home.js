import React from 'react';
import NavBar from '../navBar/NavBar';
import CardsContainer from '../cardsContainer/CardsContainer'
import styles from './Home.module.css'
import SideBar from '../sideBar/SideBar'

const Home = (props) => {
    return (
        <div>
            <div className={styles.navbar}>
                <NavBar />
            </div>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <CardsContainer />
                </div>
                <div className={styles.side}>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default Home;