import React from 'react';


class ImageCard extends React.Component {
    constructor(props){
    super(props);

    this.imageRef = React.createRef();
    }

componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);

}

setSpans = () => {
const height = this.imageRef.current.clientHeight;

const spans = Math.ceil(height / 150 +1);
this.setState = ({ spans });
}


render() {
const { description, urls } = this.props.image;
return (
        <div>
            <img
            alt={description}
            src={urls.regular}
            />
        </div>  
);
}
}

export default ImageCard;