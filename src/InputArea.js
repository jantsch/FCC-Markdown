
import React from 'react';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';


var InputArea = createReactClass({
    update:function(){
          //var modifiedValue=this.refs.inputValue.getDOMNode().value;
        
          this.props.onChange(this.refs.inputValue.value);
    },
    render:function(){
        return (<textarea  rows="35" cols="60"  type="text" ref="inputValue" value={this.props.text} onChange={this.update}/>)
    }
});

InputArea.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default InputArea