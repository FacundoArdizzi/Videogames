import React from 'react';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <section>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

export default Loader;