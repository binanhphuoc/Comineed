import React, { Component } from 'react';
import TitleBar from './components/Titlebar';
import PropTypes from 'prop-types';

class Inforpanel extends Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Sample Title'
  };

  render() {
    const {title} = this.props;
    return (
      <div style={{display:'inline-block', width:'50%'}}>
        <TitleBar title={title}/>
      </div>
    );
  }
}

export default Inforpanel;