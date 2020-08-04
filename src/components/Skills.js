import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"
import { ProgressBar } from "./shared/ProgressBar"

export const Skills = ({ data: { content, skills } }) => {
  return (
    <section id="skills">
      <Container>
        <div className="watermark">my skills</div>
        {RichText.render(content)}
        <Row className="desktop-p">
          {skills.map(skill => {
            return (
              <Col md={6} sm={12} className="progress-block">
                <ProgressBar data={skill} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

Skills.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
