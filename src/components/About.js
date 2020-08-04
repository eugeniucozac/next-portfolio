import React from "react"
import { Container, Row, Col, Image, Jumbotron, Button } from "react-bootstrap"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"

export const About = ({ data: { about_image, signature, content, skills, resume }, scroll }) => {
  return (
    <section id="about">
      <Container>
        <Row className="desktop-p">
          <Col md={4} className="d-md-block d-none">
            <Image src={about_image.url} />
          </Col>
          <Col md={8} sm={12}>
            <Jumbotron>
              {RichText.render(content)}
              <Image className="signature" src={signature.url} />
              <Button href={resume.url} download="FileName" target="_blank">
                Download CV
              </Button>
              <Button className="black" onClick={() => scroll("projects")}>
                My Works
              </Button>
            </Jumbotron>
          </Col>
          {skills.map(skill => (
            <Col md={3} sm={6}>
              <section className="skill">
                <Image src={skill.image.url} />
                {RichText.render(skill.title)}
              </section>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

About.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  scroll: PropTypes.func.isRequired,
}
