import React from "react"
import { NavItem, NavLink } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

export const Social = ({ type }) => {
  return (
    <ul className={`social ${type}`}>
      <NavItem as="li">
        <NavLink href="https://www.linkedin.com/in/eugene-cozac-0a917b7b" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </NavLink>
      </NavItem>
      <NavItem as="li">
        <NavLink href="https://github.com/eugeniucozac" target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </NavLink>
      </NavItem>
      <NavItem as="li">
        <NavLink href="" target="_blank">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </NavLink>
      </NavItem>
    </ul>
  )
}

Social.propTypes = {
  type: PropTypes.string.isRequired,
}
