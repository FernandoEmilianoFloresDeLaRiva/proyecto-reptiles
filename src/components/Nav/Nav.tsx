import React from 'react'
import styles from "./Nav.module.css"

interface Props {
  theme : string;
}

export const Nav  : React.FC<Props> =  ({theme}) => {
  return (
    <nav className={styles.nav}>Nav</nav>
  )
}
