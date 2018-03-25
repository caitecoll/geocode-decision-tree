import React from 'react';

/* the main page for the index route of this app */
const StageHeader = (props) => {
  return (
    <div>
      <h1>{props.stage.stage_name}</h1>
      <div>{props.stage.description}</div>
    </div>
  );
};

export default StageHeader;
