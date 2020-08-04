import React from "react"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"

export const ProgressBar = ({ data: { name, progress } }) => {
  return (
    <>
      {name.length && <h6>{RichText.render(name)}</h6>}
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </>
  )
}

ProgressBar.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
