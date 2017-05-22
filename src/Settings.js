import React, { Component } from 'react';
import { func, number } from 'prop-types';
import './Settings.css';

class Settings extends Component {

  onRowCountChange(event) {
    const newState = {
      rows: parseInt(event.target.value, 10),
      columns: this.props.columns,
    };
    this.props.onSizeChange(newState);
  }

  onColumnCountChange(event) {
    const newState = {
      columns: parseInt(event.target.value, 10),
      rows: this.props.rows,
    };
    this.props.onSizeChange(newState);
  }

  render() {
    const { rows, columns } = this.props;
    return (<div className="Settings">
      <div className="options card">
        <div className="card-block">
          <label htmlFor="rowCount">Rows:</label>
          <div>
            <div className="count">{rows}</div>
            <input
              id="rowCount"
              type="range"
              min="1"
              max="30"
              onChange={event => this.onRowCountChange(event)}
              value={rows}
            />
          </div>
          <label htmlFor="columnCount">Columns:</label>
          <div>
            <div className="count">{columns}</div>
            <input
              id="columnCount"
              type="range"
              min="1"
              max="30"
              onChange={event => this.onColumnCountChange(event)}
              value={columns}
            />
          </div>
        </div>
      </div>
    </div>);
  }
}

Settings.propTypes = {
  onSizeChange: func.isRequired,
  columns: number.isRequired,
  rows: number.isRequired,
};

export default Settings;
