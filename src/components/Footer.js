import React from "react"
import styles from "./styles.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <a
        href="https://github.com/NickFoden/bushwick-running-club"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source / Contribute
      </a>
      <p>Now lets go for a run. © {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer
