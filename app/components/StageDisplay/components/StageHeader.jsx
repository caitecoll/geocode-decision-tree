import React from 'react';

/* the main page for the index route of this app */
const StageHeader = (props) => {
  console.log()
  return (
    <div>
      <h1>{!!props.stage && props.stage.stage_name}</h1>
      <div>{!!props.stage && props.stage.description}</div>
    </div>
  );
};

export default StageHeader;
