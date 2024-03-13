import React from 'react'
import styles from './Menu.module.css'
import menuItems from './configuration.json'
import { useRouter } from 'next/navigation'
import { appStore } from '@/store/appStore'
import { Cookies } from '@/common/cookies'
export const Menu = () => {
    const [menuItem, setMenuItem] = React.useState("home");
    const router = useRouter()
    const fnMenuClick = (id, path) => {
        setMenuItem(id)
        if (id == 'logout') {
            appStore.dispatch({ type: "AUTH", payload: false })
            Cookies.clear();
            router.push('/')
        } else {
            router.push(`/${path}`)
        }
    }
    return (
        <ul className={styles.menu}>
            {
                menuItems.map(({ item, path, id }, index) => {
                    return <li key={`li_${index}`} className={`${menuItem === id ? styles.menuActive : ""}`} id={id} onClick={() => fnMenuClick(id, path)}>{item}</li>
                })
            }
        </ul>
    )
}

