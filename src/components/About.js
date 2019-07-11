import React from "react"
import styles from "./styles.module.css"

const About = () => {
  return (
    <section className={styles.section} id="about">
      <h2>About:</h2>
      <p>
        BRC started from a few friends training for the NY full who wanted to
        organize a couple of weekly group runs Tuesday evenings and one weekend
        morning to switch it up and have some fun running around our
        neighborhood. A changing handful of runners would consistently run
        together.
      </p>
      <p>
        The founding organizers took a break for winter and then found
        themselves pulled in different directions and the club changed from a
        standing run to a flexible meet your neighbors in the group and plan
        around each others schedules.
      </p>
    </section>
  )
}

export default About
