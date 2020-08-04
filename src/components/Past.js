import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { RichText } from "prismic-reactjs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

export const Past = ({ data: { content, experience } }) => {
  return (
    <section id="past" className="d-none d-md-block">
      <Container>
        <div className="watermark">experience</div>
        {RichText.render(content)}
        <Row className="desktop-p">
          {experience.map(item => {
            return (
              <Col md={4} sm={12}>
                <Card>
                  <Card.Header className="rounded-circle">
                    <FontAwesomeIcon icon={["fas", item.iconname[0].text]} />
                  </Card.Header>
                  <Card.Body>{RichText.render(item.description)}</Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

Past.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
