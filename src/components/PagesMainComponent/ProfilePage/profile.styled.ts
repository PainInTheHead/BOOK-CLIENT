import styled from "styled-components";

export const StyledPageProfile = styled.div`
  display: flex;
  width:1280px;
  margin:0 auto;
  .profile-images {
    height:305px;
    position: relative;
    margin-right: 120px;
    .btn-changeImage{
        position: absolute;
        bottom:5%;
        right:5%;
        cursor: pointer;
    }
  }
`;
