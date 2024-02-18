import styled from "styled-components";

export const StyledCard = styled.div`
  width: 305px;
  height: 663px;
  border-radius: 16px;
  .cover-card {
    position: relative;
    padding: 0;
    width: 305px;
    height: 448px;
    border-radius: 16px;
  }
  .like-btn {
    border: none;
    position: absolute;
    cursor: pointer;
    padding: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: none;
    top: 5%;
    left: 5%;
  }

  .about-card {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  .name-athor {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    span:last-child {
      color: #b9bac3;
    }
  }

  .stars {
    height: 26px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
    span {
      height: 20px;
      letter-spacing: 0;
      font-size: 16px;
      color: #b9bac3;
    }
    button {
      cursor: pointer;
      width: 26px;
      height: 26px;
      background: none;
    }
    button:nth-child(-n + 4) {
      margin-right: 30px;
    }
    button:nth-child(5) {
      margin-right: 24px;
    }
  }

  .btn-price {
    cursor: pointer;
    width: 100%;
    height: 48px;
    background-color: #344966;
    border-radius: 16px;
    border: none;
    span {
      color: #f0f4ef;
      font-size: 20px;
      margin: 0 auto;
    }
    &:hover {
      background-color: #0d1821;
      transition: background-color 0.5s ease;
    }
    &:focus {
      box-shadow: 0 0 0 8px rgba(214, 216, 231, 1);
      transition: box-shadow 0.3s ease;
    }
  }
`;
