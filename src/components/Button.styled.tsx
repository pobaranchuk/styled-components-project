import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string  // ? means optional
    fontSize?: string
    btnType: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>` // <> to add our custom type
  border: none;
  border-radius: 1dvb;
  padding: 10px 20px;
  color: cornflowerblue;
  background-color: ${props => props.color || "pink"};
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "pink"};
    color: ${props => props.color || "pink"};
    background-color: transparent;

    &:hover {
      border-color: aqua;
      color: aqua;
      background-color: transparent;
    }
  `}
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "pink"};
    color: snow;

    &:hover {
      background-color: cadetblue;
    }
  `}
  
  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px aqua;
  `}
`