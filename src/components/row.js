import React from 'react';
import cx from 'classnames';

const Row = ({classNames, children, style}) => {
  classNames = cx(classNames, "w-full py-6 pb-12 px-6 md:px-10 lg:px-24");
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  )
};

export default Row;