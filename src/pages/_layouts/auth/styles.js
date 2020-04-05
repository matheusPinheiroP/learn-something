import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #121114, #201c29);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    display: block;
    width: 106px;
    margin: 0px auto 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    border-width: 2px;
    border-style: solid;
    border-color: rgb(40, 39, 44);
    border-image: initial;
    border-radius: 5px;
    padding: 15px 21px;
    width: 100%;
    background: rgb(25, 24, 31);
    color: #fff;
    margin: 0 0 10px;
  }

  span {
    color: rgb(113, 89, 193);
    align-self: flex-start;
    margin: 0 0 10px;
  }

  button {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
    height: 50px;
    background: rgb(113, 89, 193);
    border-radius: 5px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    transition: background 0.2s ease 0s, color 0.2s ease 0s;
  }

  a {
    font-size: 14px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    opacity: 0.8;
    align-self: flex-start;
    margin: 8px 0px 18px;
    transition: opacity 0.2s ease 0s;
  }

  div.new-account {
    font-size: 14px;
    margin-top: 24px;
    color: rgb(204, 204, 204);
    text-align: center;
  }

  div.footer {
    display: flex;
    flex-direction: column;
    color: rgb(68, 67, 75);
    font-size: 12px;
    text-align: center;
    margin-top: 30px;

    small {
      margin-bottom: 10px;
    }
  }
`
