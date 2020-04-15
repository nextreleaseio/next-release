import React from 'react';

const Loom = ({ classNames, id }) => {
    return (
        <div className={classNames}>
            <div
                style={{
                    position: 'relative',
                    paddingBottom: '62.5%',
                    height: 0
                }}
            >
                <iframe
                    src={`https://www.loom.com/embed/${id}`}
                    frameBorder="0"
                    allowFullScreen="true"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
        </div>
    );
};

export default Loom;
