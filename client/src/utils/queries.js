import {gql} from '@apollo/client'

export const GET_USER =gql`
query me {
    me {
      username
      email
      _id
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`