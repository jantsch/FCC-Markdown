
import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const MdTransformed = ({textToTransform}) => {

	 const transform = (text) => {	 
	      var transformed = marked(text, {sanitize: true});
	      return transformed;
    }
	return (
			<div className="text-left">
				<div dangerouslySetInnerHTML={{__html: transform(textToTransform)}}/>		
			</div>
	)
}

MdTransformed.propTypes = {
	textToTransform: PropTypes.string.isRequired
}

MdTransformed.defaultProps = {
	textToTransform: "Standart Text"
}



export default MdTransformed