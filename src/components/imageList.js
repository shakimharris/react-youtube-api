import React from 'react';

const ImageList = props => {
 props.image.map((image) => {
    return <img src={image.urls.regular} />
});

    return <div>ImageList</div>;

};

export default ImageList;