import React from 'react'
import styles from "./Nav.module.css"

interface Props {

}

export const Nav  : React.FC<Props> =  () => {
  return (
    <nav className={styles.nav}>Nav</nav>
  )
}
