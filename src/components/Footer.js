import React from "react"
import { Social } from "./shared/Social"

export const Footer = () => {
  const newDate = new Date()
  return (
    <footer>
      <div className="social-left d-flex">
        <Social type="footer" />
      </div>
      <p>{newDate.getFullYear()} &copy; Eugeniu Cozac All Rights Reserved</p>
    </footer>
  )
}
