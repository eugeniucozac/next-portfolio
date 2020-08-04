import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"

export const Experience = ({ data: { content, experienceblock, educationblock } }) => {
  return (
    <section id="experience">
      <Container>
        <div className="watermark">my resume</div>
        {RichText.render(content)}
        <Row className="desktop-p">
          <Col md={6} sm={12}>
            <h3 className="d-none d-md-block">Experience</h3>
          </Col>
          <Col md={6} sm={12}>
            <h3 className="d-none d-md-block">Experience</h3>
          </Col>
          {experienceblock.map(item => (
            <Col md={6} sm={12} className="experience-wrap">
              <section className="experience-widget">
                <div className="circle" />
                {RichText.render(item.experience)}
              </section>
            </Col>
          ))}
        </Row>
        <Row className="desktop-p">
          <Col md={6} sm={12}>
            <h3 className="d-none d-md-block">Education</h3>
          </Col>
          <Col md={6} sm={12}>
            <h3 className="d-none d-md-block">Education</h3>
          </Col>
          {educationblock.map(item => (
            <Col md={6} sm={12} className="experience-wrap">
              <section className="experience-widget">
                <div className="circle" />
                {RichText.render(item.education)}
              </section>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

Experience.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
