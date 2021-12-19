import React from "react";
import PropTypes from "prop-types";

const Input = (props) => (
    <div style={style.container}>
        <div style={style.containerSmall}/>
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(event) =>
                props.onChange(event.target.value)
            }
            style={style.input}
        />
    </div>
);

const style= {
    container: {
        height: 44,
        width: "40%",
        border: "1px solid #949090 ",
        borderRadius: 8,
        display: "flex ",
        flexDirection: "file"
    },
    containerSmall: {
        margin: 17,
        width: 10,
        height: 10,
        backgroundColor: "#000000"
    },
    input: {
        fontSize: 12,
        padding: 5,
        border: "none"
    },
}

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    placeholder: "",
    type: "text",
    value: "",
    onChange: () => {},
};

export default Input;