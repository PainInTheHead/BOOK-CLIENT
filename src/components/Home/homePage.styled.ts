import styled from "styled-components";

export const StyledHome = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  border: none;
  .catalog-filter {
    margin-top:470px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 40px;
    }
  }
  .catalog-content {
    margin-top: 38px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .banner-header {
    position: absolute;
    z-index: 1;
    top: 3%;
  }
`;
