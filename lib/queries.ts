import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Exhibitions
export const GET_EXHIBITIONS = gql`
  query GetExhibitions($first: Int = 20) {
    nodeExhibitions(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeExhibition {
          body {
            processed
            summary
          }
          startDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          exhibitionType {
            ... on TermInterface {
              id
              name
            }
          }
          curator
          admission
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EXHIBITION_BY_PATH = gql`
  query GetExhibitionByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeExhibition {
            id
            title
            path
            body {
              processed
            }
            startDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            exhibitionType {
              ... on TermInterface {
                id
                name
              }
            }
            curator
            admission
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Artists
export const GET_ARTISTS = gql`
  query GetArtists($first: Int = 50) {
    nodeArtists(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeArtist {
          body {
            processed
          }
          medium {
            ... on TermInterface {
              id
              name
            }
          }
          websiteUrl
          artistType
          residencyDates
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTIST_BY_PATH = gql`
  query GetArtistByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArtist {
            id
            title
            path
            body {
              processed
            }
            medium {
              ... on TermInterface {
                id
                name
              }
            }
            websiteUrl
            artistType
            residencyDates
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endTime {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
          admission
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endTime {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            admission
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeExhibition {
            id
            title
            path
            body {
              processed
            }
            startDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            exhibitionType {
              ... on TermInterface {
                id
                name
              }
            }
            curator
            admission
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeArtist {
            id
            title
            path
            body {
              processed
            }
            medium {
              ... on TermInterface {
                id
                name
              }
            }
            websiteUrl
            artistType
            residencyDates
            photo {
              url
              alt
              width
              height
            }
          }
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endTime {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            admission
          }
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured exhibitions for homepage (limit to 3)
export const GET_FEATURED_EXHIBITIONS = gql`
  query GetFeaturedExhibitions {
    nodeExhibitions(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeExhibition {
          startDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          exhibitionType {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            summary
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`
