import { AiOutlineMenu } from "react-icons/ai";
import styles from './header.module.scss'

import React from 'react'

export default function menu() {
    return (
        <button className={styles.menuButton}>
            <AiOutlineMenu style={{ fontSize: "64px", color: "white" }} />
            <span>카테고리</span>
        </button>
    )
}
