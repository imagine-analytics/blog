import styled from '@emotion/styled'
import NextLink from 'next/Link'
import React from 'react'
import { Grid, Flex, Heading, Link, Text } from './Elements'

export type PostType = {
  author?: string
  date: string
  id: string
  image: string
  pathname: string
  summary?: string
  title?: string
}

type PropsType = {
  post: PostType
  span?: number
}

const PostCard = ({ post, span }: PropsType) => (
  <Grid
    css={{
      backgroundImage: `url(${post.image})`,
      backgroundRepeat: 'none',
      backgroundSize: 'cover',
      color: '#fff',
      height: '16rem',
      '@media (min-width: 40em)': {
        gridColumn: span != null ? `span ${span}` : undefined,
        height: span != null && span > 1 ? '24rem' : '16rem',
      },
    }}
  >
    <NextLink
      as={post.pathname}
      href={{ pathname: '/post', query: { id: post.id } }}
      passHref
    >
      <Link>
        <Flex
          css={{
            backgroundColor: 'rgba(0,0,0,0.333)',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            padding: '1rem',
            transition: 'background-color 0.333s ease',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.666)',
            },
          }}
        >
          <Grid css={{ gridGap: '0.5rem' }}>
            <Heading>{post.title || post.id}</Heading>
            <Text>{`${post.date} | ${post.author || 'HW'}`}</Text>
            <Text>{post.summary || ''}</Text>
          </Grid>
          <Text>Read More...</Text>
        </Flex>
      </Link>
    </NextLink>
  </Grid>
)

export const PostCardGrid = styled(Grid)({
  gridGap: '1rem',
  '@media (min-width: 40em)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

export default PostCard
