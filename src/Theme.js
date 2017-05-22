import React, { Component } from 'react';
import { func } from 'prop-types';
import './Theme.css';

class Theme extends Component {

  constructor() {
    super();
    this.state = { theme: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onThemeChange } = this.props;
    this.setState({ theme: event.target.value });
    onThemeChange({ theme: event.target.value });
  }

  render() {
    const { theme } = this.state;
    return (
      <div>
        <input
          style={theme ? { borderWidth: 0 } : {}}
          type="text"
          onChange={event => this.onChange(event)}
          className="theme"
          placeholder="A theme, e.g. Exercise"
          value={theme}
        />
      </div>);
  }
}

Theme.propTypes = {
  onThemeChange: func.isRequired,
};

export default Theme;
