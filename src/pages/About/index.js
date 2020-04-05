import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function About() {
  return (
    <Container>
      <div className="getting-started">
        <h1>Welcome!</h1>
        <p>We want to know how much you understand about the <b>books and film's</b></p>
      </div>
      <div className="new-account">
        Well, if you are ready,
        <Link to="/login"> getting started</Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  div.getting-started {
    flex-direction: column;

    h1 {
      color: #fff;
      font-size: 45px;
    }

    p {
      color: #fff;
      margin-top: 30px;
      font-size: 15px;
    }
    b {
      color: rgb(211, 220, 134)
    }
  }
`;
