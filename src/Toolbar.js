import React, { Component } from 'react';
import { func, string, number } from 'prop-types';
import Settings from './Settings';
import './Toolbar.css';
import print from './print';

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.state = { showSettings: false };
  }

  toggleSettings() {
    this.setState({ showSettings: !this.state.showSettings });
  }

  render() {
    const { showSettings } = this.state;
    const { theme, requirements, rows, columns } = this.props;
    return (
      <div className="Toolbar">
        <div className="btn-group actions">
          <a
            href="https://www.reddit.com/r/theXeffect/"
            rel="noopener noreferrer"
            target="_blank"
            className="fa fa-question-circle btn btn-secondary"
          />
          <button
            onClick={() => print(theme, requirements, rows, columns)}
            className="fa fa-print btn btn-secondary"
          />
          <button
            onClick={() => this.toggleSettings()}
            className="fa fa-cog btn btn-secondary"
          />
        </div>
        {showSettings ? <Settings
          columns={columns}
          rows={rows}
          onSizeChange={this.props.onSizeChange}
        /> : null}
      </div>
    );
  }
}

Toolbar.defaultProps = {
  requirements: '',
  theme: '',
};

Toolbar.propTypes = {
  onSizeChange: func.isRequired,
  theme: string.isRequired,
  requirements: string.isRequired,
  rows: number.isRequired,
  columns: number.isRequired,
};

export default Toolbar;
