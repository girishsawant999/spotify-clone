import React from 'react';

function PlayListView(props) {
  const {
    match: { params },
  } = props;
  let { category_id } = params;
  return <div>
      {category_id}
  </div>;
}

export default PlayListView;
