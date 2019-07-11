import React from "react"
import styles from "./styles.module.css"

const Welcome = () => {
  return (
    <section className={styles.section} id="about">
      <h2>Say hello !</h2>
      <p>
        Find members to run with in our{" "}
        <a
          href="https://www.facebook.com/groups/BushwickRunningClub"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook group.
        </a>
      </p>

      <p>
        {" "}
        <a
          href="https://www.facebook.com/BushwickRunningClub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us
        </a>{" "}
        for updates on local events and announcements
      </p>
    </section>
  )
}

export default Welcome
