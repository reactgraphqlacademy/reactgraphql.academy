import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { Blockquote } from '../components/text'
import Section from 'src/components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2Ref, H3, P } from '../components/text'
import Header from '../components/layout/Header'
import Ul, { Li } from '../components/layout/Ul'
import { Video, Image } from '../components/elements'
import { UpcomingTrainingSection } from '../components/training'
import BlogSection from 'src/components/blog/BlogSection'

const CoachTitle = styled(H3)`
  & {
    padding-top: 0;
  }
`
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    ul: Ul,
    li: Li,
  },
}).Compiler

const Coach = ({ data }) => {
  const {
    name,
    title,
    companyName,
    companyLink,
    gitHub,
    medium,
    twitter,
    linkedIn,
    blockquote,
    youtubeVideoId,
    videoDescription,
    imageDescription,
    imageSrc,
    tags,
  } = data.markdownRemark.frontmatter
  const { htmlAst } = data.markdownRemark
  const linkName = name.toLowerCase().replace(' ', '-')
  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Header fullHeight={false} titleLines={[`${name}`]} />
          <Section>
            <Grid>
              <Row>
                <Col md={5}>
                  {youtubeVideoId ? (
                    <Video
                      youtubeId={youtubeVideoId}
                      description={<P>{videoDescription}</P>}
                    />
                  ) : (
                    <Image src={imageSrc} width="100%" alt={imageDescription} />
                  )}
                </Col>
                <Col md={5} mdOffset={1}>
                  <H2Ref>
                    {name}
                    <Link name={linkName} to={`#${linkName}`}>
                      #
                    </Link>
                  </H2Ref>
                  <CoachTitle>
                    {title} at <Link to={companyLink}>{companyName}</Link>
                  </CoachTitle>
                  <Ul inline>
                    <Li>
                      <Link to={gitHub}>GitHub</Link>
                    </Li>
                    <Li>|</Li>
                    {medium && (
                      <React.Fragment>
                        <Li>
                          <Link to={medium}>Medium</Link>
                        </Li>
                        <Li>|</Li>
                      </React.Fragment>
                    )}
                    {twitter && (
                      <React.Fragment>
                        <Li>
                          <Link to={twitter}>Twitter</Link>
                        </Li>
                        <Li>|</Li>
                      </React.Fragment>
                    )}
                    <Li>
                      <Link to={linkedIn}>LinkedIn</Link>
                    </Li>
                  </Ul>
                  {renderAst(htmlAst)}
                  <Blockquote bg="primary" triangle="left">
                    {blockquote}
                  </Blockquote>
                </Col>
              </Row>
            </Grid>
          </Section>
          <BlogSection tags={tags} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query CoachQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        title
        companyName
        companyLink
        gitHub
        medium
        twitter
        linkedIn
        blockquote
        youtubeVideoId
        videoDescription
        imageDescription
        imageSrc
        tags
      }
      htmlAst
    }
  }
`

export default Coach