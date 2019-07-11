import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header_header}>
    <div className={styles.header_div}>
      <h1>{siteTitle}</h1>
    </div>
  </header>
)

// <Link to="#about">{siteTitle}</Link>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
