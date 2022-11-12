import styled from "styled-components";

export const StyledFavorits = styled.div`
width: 100%;
overflow: auto;
margin: 34px;
section {
    flex-direction: column;
    display: flex;
}
div {
    width: calc(100vw - 16px * 4);
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: auto;
}
a {
        display: flex;
        flex-direction: column;
        padding-top: 14px;
        justify-content: center;
}
img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
}
span {
        text-align: center;
          padding-top: 8px;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
h2 {
    font-size: 16px;
    margin-bottom: 18px;
    text-transform: capitalize;
}
`;