import PropTypes from "prop-types"
import TextField from "@mui/material/TextField"

function Input({label,type,name}) {
        return(
            <TextField style={{ width: "48%", marginRight: "2%" }} label={label} id="filled-basic" 
            variant="filled" type={type} name={name} />
        )
        }

Input.propTypes={
    label: PropTypes.string,
    type:PropTypes.string,
    name:PropTypes.string,
}

export default Input