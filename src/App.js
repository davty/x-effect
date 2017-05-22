import React, { Component } from 'react';
import _ from 'lodash';
import Toolbar from './Toolbar';
import Theme from './Theme';
import Requirements from './Requirements';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      columns: 7,
      rows: 4,
      theme: '',
      requirements: '',
    };
  }

  onSizeChange(size) {
    this.setState(size);
  }

  onThemeChange(theme) {
    this.setState(theme);
  }

  onRequirementsChange(event) {
    this.setState({ requirements: event.target.value });
  }

  render() {
    const { rows, columns, theme, requirements } = this.state;
    return (
      <div className="App">
        <Theme onThemeChange={value => this.onThemeChange(value)} />
        <Requirements onRequirementsChange={value => this.onRequirementsChange(value)} />
        <Toolbar
          theme={theme}
          requirements={requirements}
          rows={rows}
          columns={columns}
          onSizeChange={size => this.onSizeChange(size)}
        />
        <table>
          <tbody>
            {_.range(0, rows).map(
            row =>
              (<tr key={row}>
                {_.range(0, columns).map(
                column => <td key={column} />,
              )}
              </tr>))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
