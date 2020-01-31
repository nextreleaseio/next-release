import React from 'react';


const Loom = ({classNames, id}) => {
  const video = `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/${id}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`

  return (
    <div className={classNames} dangerouslySetInnerHTML={{__html: video}}>
    </div>
  );
};

export default Loom;