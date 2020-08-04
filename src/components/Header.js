import React from "react"
import { Container, Row, Col, NavItem, NavLink, Image, Nav, Jumbotron, Button } from "react-bootstrap"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"
import { Social } from "./shared/Social"

const menu = ["Home", "About", "Experience", "Skills", "Projects", "Contact"]

export const Header = ({ data: { logo, content, header_image }, scroll }) => {
  return (
    <header>
      <div className="sidebar clearfix">
        <h1>
          <Image src={logo.url} alt="logo" />
        </h1>
        <Social type="header" />
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <Nav className="d-md-block d-none">
              <ul className="nav">
                {menu.map(item => (
                  <NavItem as="li">
                    <NavLink onClick={() => scroll(item)}>{item}</NavLink>
                  </NavItem>
                ))}
              </ul>
            </Nav>
            <section>
              <Row>
                <Col md={6} sm={12}>
                  <Jumbotron className="mb-0 pb-sm-0-down">
                    {RichText.render(content)}
                    <Button onClick={() => scroll("contact")}>Contact Me</Button>
                  </Jumbotron>
                </Col>
                <Col md={6} sm={12} className="d-md-block d-none">
                  <Image src={header_image.url} className="card-img" />
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  scroll: PropTypes.func.isRequired,
}
