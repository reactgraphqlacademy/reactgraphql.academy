import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H2 } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import { CurriculumBootcamp } from '../components/curriculum'
import { BOX_SHADOW, WHITE } from '../styles'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../components/utils'
import Header from '../components/layout/Header'
import TrustedBy from '../components/training/TrustedBy'

const CurriculumBox = styled.div`
  ${BOX_SHADOW};
  padding: 80px 0 50px;
  background-color: ${WHITE};
`
const CallToActionRow = styled(Row)`
  text-align: center;
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-bottom: -25px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 5px 0;
    }
  }
`

const ForYourCompantCallToActionsRow = styled(Row)`
  margin-top: 30px;
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 5px 0;
    }
  }
`

const IndexPage = () => (
  <div>
    <Header
      titleLines={['Take your dev career further', 'by mastering React']}
      subtitle="In-person training from experts who were <br /> the first in
      Europe to teach React"
    />
    <TopSection>
      <Grid>
        <CallToActionRow>
          <Col xs={12} sm={4}>
            <LinkButton
              cta
              large
              to="/react-redux-graphql-bootcamp"
              children="1-week bootcamp >>"
            />
          </Col>
          <Col xs={12} sm={4}>
            <LinkButton
              large
              to="/react-redux-graphql-part-time-course"
              children="6-week part-time course >>"
            />
          </Col>
          <Col xs={12} sm={4}>
            <LinkButton
              large
              to="/about-us#private-on-site-corporate-training >>"
              children="Corporate team training >>"
            />
          </Col>
        </CallToActionRow>
        <CurriculumBox>
          <CurriculumBootcamp />
        </CurriculumBox>
      </Grid>
    </TopSection>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col lg={11} lgOffset={1}>
                <H2>What will I get from a ReactJS Academy training?</H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12} lg={11} lgOffset={1}>
                <Ul>
                  <Li>
                    <strong>Build production ready</strong> React apps.
                  </Li>
                  <Li>
                    Discuss <strong>real-world projects</strong>.
                  </Li>
                  <Li>
                    Learn <strong>best practices</strong>.
                  </Li>
                  <Li>
                    <strong>Mentoring</strong> by our expert coaches.
                  </Li>
                  <Li>
                    Alumni <strong>community</strong>.
                  </Li>
                  <Li>
                    <strong>Stay ahead</strong> in modern development.
                  </Li>
                </Ul>
                <P>
                  <Link to="/react-redux-graphql-bootcamp#curriculum">
                    Checkout the curriculum
                  </Link>
                </P>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col lgOffset={1} lg={10}>
            <AttendeeQuote
              quote="After being a developer for 10 years and with the increasing amount of people coming into tech, I wanted to ensure I stayed ahead of the curve in my skills to make my career further. Simply put, ReactJS Academy gave me that!"
              fullname="Joe Woodley"
              job="Senior Front-end developer"
              company="ASOS.com"
              profilePicUrl="https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col md={7} lg={6} lgOffset={1}>
            <Row>
              <Col>
                <H2>
                  Is this training right for me?<br />Why ReactJS Academy
                </H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul>
                  <Li>
                    For working developers - <strong>not for beginners!</strong>
                  </Li>
                  <Li>
                    <strong>Hands-on project-based</strong> training.
                  </Li>
                  <Li>
                    A <strong>collaborative</strong> learning environment.
                  </Li>
                  <Li>
                    <Link to="/react-redux-graphql-bootcamp">Bootcamps</Link>{' '}
                    for accelerated learning.
                  </Li>
                  <Li>
                    <Link to="/react-redux-graphql-part-time-course">
                      Part-time courses
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                </Ul>
              </Col>
            </Row>
            <P>
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
            <Row>
              <Col xs={6} md={5}>
                <LinkButton
                  cta
                  extraLarge
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamps"
                />
              </Col>
              <Col xs={6} md={5}>
                <LinkButton
                  extraLarge
                  to="/react-redux-graphql-part-time-course"
                  children="Part-time courses"
                />
              </Col>
            </Row>
          </Col>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
        </Row>
      </Grid>
    </Section>
    <TrustedBy />
    <Section color="lightGrey">
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col>
                <H2>
                  What's in it for your company - Why is ReactJS Academy great
                  for your team
                </H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul>
                  <Li>Avoid delays and business losses</Li>
                  <Li>Minimize risk of on boarding React</Li>
                  <Li>Safe environment for developers to learn</Li>
                  <Li>
                    Increase employee retention, motivation and productivity
                  </Li>
                  <Li>Offer more services to internal and external clients</Li>
                </Ul>
              </Col>
            </Row>
            <P>
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
            <ForYourCompantCallToActionsRow>
              <Col xs={12} sm={4}>
                <LinkButton
                  to="/about-us#private-on-site-corporate-training"
                  children="Corporate team training"
                />
              </Col>
              <Col xs={12} sm={4}>
                <LinkButton
                  to="/react-redux-graphql-part-time-course"
                  children="6-week Part-time courses"
                />
              </Col>
              <Col xs={12} sm={4}>
                <LinkButton
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamp"
                />
              </Col>
            </ForYourCompantCallToActionsRow>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <AttendeeQuote
              quote="My devs were on training for a week, but when they came back they were React Masters. We adpoted the ecosystem much quicker than we thought possible and now we work faster and more efficiently."
              fullname="Richard Moss"
              job="CTO"
              company="Financial Times"
              profilePicUrl="https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
  </div>
)

export default IndexPage
