import React, { useState } from "react"
import { Container, Row, Col, Card, Image, Form, FormGroup, FormControl, Button } from "react-bootstrap"
import { RichText } from "prismic-reactjs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

export const Contact = ({ data: { content, touch } }) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const response = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setInputs({
        name: "",
        email: "",
        message: "",
      })
    } else {
      setStatus({
        info: { error: true, msg },
      })
    }
  }

  const onChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const onSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
    const text = await res.text()
    response(res.status, text)
  }

  return (
    <section id="contact">
      <Container>
        <div className="watermark">contact</div>
        {RichText.render(content)}
        <Row className="desktop-p">
          <Image src="/images/clouds.svg" className="card-img clouds col-md-8" />
          <Col md={6} sm={12}>
            <h5>Get in touch</h5>
            {touch.map(item => (
              <Card>
                <Row noGutters>
                  <Col md={2} sm={2}>
                    <div className="icon-fa">
                      <FontAwesomeIcon icon={item.iconname[0].text} />
                    </div>
                  </Col>
                  <Col md={10} sm={10}>
                    <Card.Body>{RichText.render(item.description)}</Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col md={6} sm={12}>
            <h5>Drop Me a Line</h5>
            <Form onSubmit={onSubmit}>
              <Form.Row>
                <FormGroup as={Col} md="6">
                  <FormControl
                    type="text"
                    name="name"
                    placeholder="Name *"
                    onChange={onChange}
                    required
                    value={inputs.name}
                  />
                </FormGroup>
                <FormGroup as={Col} md="6">
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="Email *"
                    onChange={onChange}
                    required
                    value={inputs.email}
                  />
                </FormGroup>
                <FormGroup as={Col} md="12">
                  <FormControl
                    type="textarea"
                    name="message"
                    placeholder="Your Message"
                    onChange={onChange}
                    required
                    value={inputs.message}
                  />
                </FormGroup>
              </Form.Row>
              <Button type="submit">Send Now</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
