import React from "react"
import { Image } from "react-bootstrap"
import { RichText } from "prismic-reactjs"

export const Slide = ({ project }) => {
  return (
    <>
      <Image src={project.image.url} alt="Personal portfolio" />
      <section className="capture">
        <a className="view" href={project.site.url} target="_blank" rel="noreferrer">
          View Live Project
        </a>
        &nbsp;<a>&#124;</a>&nbsp;
        <a className="view" href={project.github.url} target="_blank" rel="noreferrer">
          View on Github
        </a>
        {RichText.render(project.name)}
        {RichText.render(project.stack)}
      </section>
    </>
  )
}
