import React from 'react'
import styles from './Loader.module.css'
export const Loader = () => {
    return (
        <div>
            <div className={styles.mask}></div>
            <img src="loader.gif" alt="Loading..."></img>
        </div>
    )
}

