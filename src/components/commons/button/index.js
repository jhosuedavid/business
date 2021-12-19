import React from "react";
import PropTypes from "prop-types";
import {Color} from '../../../resources';

const Button = (props) => (
    <div
        onClick={
            props.isActive ?
                props.onClick :
                null
        }
        style={
            props.isActive ?
                styles.active_button :
                styles.deactive_button
        }
    >
        {props.text}
    </div>
);

const styles = {
    active_button: {
        backgroundColor: Color.blue,
        color: Color.white,
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 7,
        display: 'inline-block',
    },
    deactive_button: {
        backgroundColor: Color.gray,
        color: Color.white,
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 7,
        display: 'inline-block',
    },
};

 Button.propTypes = {
    text: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};

 Button.defaultProps = {
     text: "",
     isActive: false,
     onClick: () => {},
 };

export default Button;