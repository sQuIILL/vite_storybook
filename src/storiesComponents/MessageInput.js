import PropTypes from "prop-types"
import TextField from "@mui/material/TextField"

function MessageInput({ label, rows, type, name }) {
    return (
        <TextField
            label={label}
            style={{ width: "100%" }}
            id="filled-basic standard-multiline-static filled-basic"
            multiline
            type={type}
            rows={rows}
            variant="filled"
            name={name}
        />
    )
}

MessageInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.number,
}
export default MessageInput