import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import styles from './header.module.scss'

export default function UserPanel() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div>
            <span><Link href={'/'} className={styles.userPanel_button}><BiLogIn style={{ fontSize:'32px', color: '#000000' }} />로그인</Link></span>
            <span><Link href={'/'} className={styles.userPanel_button}><AiOutlineUser style={{ fontSize:'32px', color: '#000000' }}/>회원정보</Link></span>
            <span><Link href={'/'} className={styles.userPanel_button}><AiOutlineShoppingCart style={{ fontSize:'32px', color: '#000000' }} />장바구니</Link></span>
        </div>
    )
}
