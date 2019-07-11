import React from "react"
import BrooklyBridge from "../images/Brooklyn_Bridge.jpg"
import styles from "./styles.module.css"

const WelcomeImage = () => {
  return (
    <section className={styles.section}>
      <img
        src={BrooklyBridge}
        className={styles.welcome_image}
        alt="Brookyln bridge"
      />
    </section>
  )
}

export default WelcomeImage
