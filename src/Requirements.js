import React, { Component } from 'react';
import { func } from 'prop-types';
import './Requirements.css';

class Requirements extends Component {

  constructor() {
    super();
    this.state = { requirements: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onRequirementsChange } = this.props;
    this.setState({ requirements: event.target.value });
    onRequirementsChange({ requirements: event.target.value });
  }

  render() {
    const { requirements } = this.state;
    return (
      <div>
        <input
          style={requirements ? { borderWidth: 0 } : {}}
          type="text"
          onChange={event => this.onChange(event)}
          className="requirements"
          placeholder="Requirements for fullfilling an X, e.g. 5 push ups every evening"
          value={requirements}
        />
      </div>
    );
  }
}

Requirements.propTypes = {
  onRequirementsChange: func.isRequired,
};

export default Requirements;
