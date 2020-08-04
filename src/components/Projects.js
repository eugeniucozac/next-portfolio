import React from "react"
import { Container, Col, Row, Nav, NavItem } from "react-bootstrap"
import { Slide } from "../components/shared/Slide"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"
import dynamic from "next/dynamic"
const Carousel = dynamic(() => import("3d-react-carousal").then(mod => mod.Carousel), {
  ssr: false,
})

export const Projects = ({ data: { content, projects } }) => {
  return (
    <section id="projects">
      <Container>
        <div className="watermark">projects</div>
        {RichText.render(content)}
        <Row id="u-slider" className="desktop-p">
          <Col className="static">
            <Carousel
              slides={projects.map(project => (
                <Slide project={project} />
              ))}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

Projects.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
