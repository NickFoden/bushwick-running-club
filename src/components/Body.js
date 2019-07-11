import React from "react"
import styles from "./styles.module.css"

const Body = () => {
  return (
    <section className={styles.section}>
      <h2>Run Run Run !</h2>
      <p>Local runners favorite routes (Coming soon)</p>
      <p>
        Looking for events in NYC? Check out{" "}
        <a
          href="https://www.nyrr.org/run/events-calendar"
          target="_blank"
          rel="noopener noreferrer"
        >
          NYRR
        </a>
      </p>
    </section>
  )
}

export default Body
