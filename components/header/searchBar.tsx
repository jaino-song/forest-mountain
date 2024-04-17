import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import styles from './header.module.scss'

export default function searchBar() {
    return (
        <div className={styles.search_bar}>
            <input type="text" name="search" />
            <button><AiOutlineSearch /></button>
        </div>
    )
}
