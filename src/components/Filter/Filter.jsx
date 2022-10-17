import { StyledLabel } from "components/CommonStyled/Label.styled"
import {StyledInput} from "components/CommonStyled/Input.styled"
export const Filter = ({ value, onChange }) => {
    return ( <StyledLabel htmlFor="">Find contacts by name
          <StyledInput type="text" value={value} onChange={onChange} />
        </StyledLabel>)
}