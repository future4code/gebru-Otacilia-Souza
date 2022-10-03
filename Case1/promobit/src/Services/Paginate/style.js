import styled from 'styled-components';

export const PaginateContainer = styled.div`
  .pagination {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 12px;

    li {
      border-radius: 12px;
      a {
        margin: 0.5rem;
        cursor: pointer;
      }
    }
  }

  .break-me {
    cursor: default;
  }

  .active {
    font-weight: bold;
    color: #999966;
  }
`