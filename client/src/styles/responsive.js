import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media (max-width: 430px) {
      ${props}
    }
  `;
};
