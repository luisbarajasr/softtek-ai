import React from 'react';

function OpinionTag(props) {
    const { texto } = props;
    return (
        <div className="bg-secondary rounded p-2 mx-2 text-white">
            <p className="mb-0 "
                style={{
                    fontSize: "0.8rem"
                }}
            >
                {texto}
            </p>
        </div>
    );
}

export default OpinionTag;