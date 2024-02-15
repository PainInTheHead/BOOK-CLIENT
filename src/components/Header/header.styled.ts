import styled from "styled-components";

export const HeaderMain = styled.header`
  margin: 0 auto;
  max-width: 1280px;
  height: 500px;
  margin-bottom: 100px;
  .search-section {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    .search-container {
      display: flex;
      align-items: center;
      div {
        padding: 0 15px;
        display: flex;
        align-items: center;
        border-radius: 15px;
        margin-left: 30px;
        background-color: #f0f4ef;
        width: 630px;
        height: 64px;
        button {
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          margin-right: 15px;
        }
        input {
          background-color: #f0f4ef;
        }
        input::-webkit-input-placeholder {
          color: #b9bac3;
        }
        input:focus {
          outline: none;
        }
      }
    }
    .btn-login {
      width: 231px;
      height: 44px;
      background-color: #344966;
      border-radius: 16px;
      color: #f0f4ef;
    }
  }
  .banner-header {
    position: absolute;
    top: 3%;
  }
`;
