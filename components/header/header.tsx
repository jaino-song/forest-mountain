import React from 'react'
import Link from 'next/link'
import Menu from './menu'
import SearchBar from './searchBar'
import styles from './header.module.scss'
import UserPanel from './userPanel'


export default function header() {

  return (
    <header className={styles.header}>
        <div>
          <Menu />
          <SearchBar />
          <UserPanel />
        </div>
        <nav>
            <Link href="/"></Link>
            <Link href="/"></Link>
        </nav>
    </header>
  )
}
