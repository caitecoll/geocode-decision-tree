import React from 'react';

/* the main page for the index route of this app */
const StageHeader = (props) => {
  console.log()
  return (
    <div style={styles.headerContainer}>
      <h3>{!!props.stage && props.stage.stage_name}</h3>
      <div>{!!props.stage && props.stage.description}</div>
    </div>
  );
};

export default StageHeader;

const styles = {
    headerContainer: {
        paddingBottom: '2vh'
    }
};
