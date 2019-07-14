import React, { useState } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import DefaultLink from '../navigation/Link'
import { Button } from '../buttons'
import { H3 as DefaultH3, P as DefaultP } from '../text'
import { InputField, Form } from '../form'
import { Col, Row } from '../layout/Grid'
import { WHITE } from '../../config/styles'
import { getComponentAliaser } from '../utils/aliasComponent'
import { composeValidators, required, mustBeEmail } from '../form/validations'
import { triggerSubscribe } from '../../api'

const aliasInput = getComponentAliaser(InputField)
export const EmailInput = aliasInput()

export const THANKS_MESSAGE = 'thanks for submitting!'

const H3 = styled(DefaultH3)`
  color: ${WHITE};
`

const P = styled(DefaultP)`
  color: ${WHITE};
`
const Link = styled(DefaultLink)`
  color: ${WHITE};
`

const Unsubscribe = styled(P)`
  padding-top: 25px;
`

export const ThanksTitle = styled(H3)`
  margin: 1em 0;
`

const ContactForm = props => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFormSubmit = ({ email }) => {
    setFormSubmitted(prevState => !prevState)
    props.triggerSubscribe({ email })
    navigate('/thanks-for-signing-up')
  }
  const { addContactUsLink, simplified } = props
  return (
    <React.Fragment>
      {!simplified && (
        <React.Fragment>
          <H3>
            {addContactUsLink ? <a name="contact-us" /> : null}
            Contact us
          </H3>
          <P>
            The best way to contact us is by emailing us at{' '}
            <Link
              to="mailto:hello@reactgrahql.academy?subject=Course%20Query&body=Hi%20RGA%20team!"
              className="footer-contact-us-mailto"
            >
              hello@reactgraphql.academy
            </Link>
            .{' '}
          </P>
          <P>You can call us during working hours on: +44 20 8123 8184</P>
          <P>
            Otherwise, you can contact us socially on{' '}
            <Link
              to="https://twitter.com/reactgqlacademy"
              className="footer-contact-us-links"
            >
              Twitter
            </Link>
            ,{' '}
            <Link
              to="https://www.instagram.com/reactgraphqlacademy/"
              className="footer-contact-us-links"
            >
              Instagram
            </Link>{' '}
            and{' '}
            <Link
              to="https://www.facebook.com/reactgraphqlacademy/"
              className="footer-contact-us-links"
            >
              Facebook
            </Link>{' '}
            or visit our{' '}
            <Link to="/about-us" className="footer-contact-us-links">
              About Us page
            </Link>{' '}
            and directly contact one of our coaches.{' '}
          </P>
        </React.Fragment>
      )}
      <a name="newsletter" />
      <H3 pt={simplified ? 0 : undefined}>Free learning resources</H3>
      <P>
        We share our resources directly from our{' '}
        <Link className="footer-free-learning-resources" to="/react/curriculum">
          React
        </Link>{' '}
        and{' '}
        <Link
          className="footer-free-learning-resources"
          to="/graphql/curriculum"
        >
          GraphQL
        </Link>{' '}
        curriculums and we'd love for you to enjoy and learn from them!{' '}
      </P>
      <P>
        Signup and learn about cutting-edge React thinking plus the latest news
        on our courses...{' '}
      </P>
      <Row>
        <Col>
          <Form
            onSubmit={handleFormSubmit}
            render={({ handleSubmit, valid, formSubmitted }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  style={formSubmitted ? { display: 'none' } : {}}
                >
                  <EmailInput
                    validate={composeValidators(required, mustBeEmail)}
                    label="Your email address:"
                    name="email"
                    placeholder="eg. steve@jobs.com"
                  />
                  <Button variant="primary" type="submit" disabled={!valid}>
                    Submit email
                  </Button>
                </form>
              )
            }}
          />
          <P>
            We won't spam you as per our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link>.
          </P>
        </Col>
      </Row>
      {formSubmitted ? (
        <Row>
          <Col>
            <ThanksTitle>{THANKS_MESSAGE}</ThanksTitle>
          </Col>
        </Row>
      ) : null}

      <Unsubscribe>
        Looking to{' '}
        <Link to="/unsubscribe/" className="footer-unsubscribe">
          unsubscribe?
        </Link>
      </Unsubscribe>
    </React.Fragment>
  )
}

ContactForm.defaultProps = {
  triggerSubscribe,
}

export default ContactForm
