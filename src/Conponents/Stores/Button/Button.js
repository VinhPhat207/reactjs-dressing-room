import React from 'react';

const Button = (props) => {
    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                id="stars"
                className="btn btn-default"
                href={`#${props.btn.tabName}`}
                data-toggle="tab"
            >
                <div className="hidden-xs">{props.btn.showName}</div>
            </button>
        </div>
    );
};

export default Button;