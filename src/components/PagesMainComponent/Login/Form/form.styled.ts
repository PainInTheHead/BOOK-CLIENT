import styled from "styled-components";

export const StyledLogInForm = styled.div`
  display: flex;
  flex-direction: column;
  .hidden {
    opacity: 0;
  }
  form {
    font-size: 16px;
    span {
      opacity: 1;
      position: absolute;
      transition: opacity 0.3s ease-in-out;
      top: 105%;
      left: 0;
      color: #ed2e7e;
    }
    label {
      color: #344966;
    }
  }
  h1 {
    margin-bottom: 60px;
    font-size: 40px;
  }
  input:focus {
    outline: none;
  }
  input {
    width: 100%;
  }
  .form-input {
    /* box-sizing:border-box; */
    display: flex;
    align-items: center;
    height: 24px;
    width: 413px;
    padding: 22px;
    background-color: #f0f4ef;
    border-radius: 16px;
    margin-bottom: 9px;
    input {
      background: none;
      &:focus {
        outline: none; // Убираем стандартную обводку при фокусе
        background: none;
      }
    }
    input::-webkit-input-placeholder {
      color: #b9bac3;
    }

    img {
      margin-right: 10px;
    }
  }

  .error-wrapper {
    border: 2px solid #ed2e7e;
    color: #ed2e7e;
    background-color: #fff2f7;
  }

  .email {
    position: relative;
    margin-bottom: 50px;
  }
  .password {
    position: relative;
    margin-bottom: 60px;
  }
  .btn-form {
    cursor: pointer;
    width: 151px;
    height: 44px;
    border-radius: 16px;
    background-color: #344966;
    color: #f0f4ef;
    text-align: center;
  }
  .btn-close {
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 2px;
    background: none;
  }
`;
