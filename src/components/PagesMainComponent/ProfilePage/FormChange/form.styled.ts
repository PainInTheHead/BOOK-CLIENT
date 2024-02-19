import styled from "styled-components";

export const StyledFormChange = styled.div`
  width: 522px;
  .pers-info-header {
    display: flex;
    justify-content: space-between;
    /* align-items:end; */
    margin-bottom: 30px;
    .ChangeInformation{
        cursor:pointer;
        color:#8D9F4F;
        font-size:14px;
        background:none;

    }
  }
  .label-pass{
    font-size:14px;
    color: #344966;
  }
  .user-name {
    display: flex;
    align-items: center;
    background-color: #F0F4EF;
    border-radius: 16px;
    height: 64px;
    padding: 0 15px;
    color: #344966;
    margin-bottom:20px;
    .icon-username {
      margin-right: 15px;
    }
    .wrapper-name-input {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .nameHolder {
      font-size: 14px;
    }
    .input-name {
      font-size: 16px;
      color: #344966;
      background: none;
    }
  }

  h1 {
    font-size: 20px;
  }
`;
