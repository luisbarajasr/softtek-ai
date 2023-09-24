import React from 'react';

function QuestionTag(props) {
  return (
    <div className="bg-light-subtle rounded p-2 mx-2"
      style={{
        cursor: "pointer"
      }}
         onClick={() => props.setQuestionText(props.question)}
    >
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
