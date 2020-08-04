import React from "react"
import PropTypes from "prop-types"
import { Footer } from "./Footer"
import { Meta } from "./Meta"

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
}
