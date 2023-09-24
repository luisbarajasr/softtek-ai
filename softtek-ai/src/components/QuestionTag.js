import React from 'react';

function QuestionTag(props) {
  return (
    <div className="bg-light-subtle rounded p-2 mx-2">
      <p className="mb-0 "
        style={{
          fontSize: "0.8rem"
        }}
      >
        {props.question}
      </p>
    </div>
  );
}

export default QuestionTag;
