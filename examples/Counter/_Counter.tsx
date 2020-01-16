import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './Counter.doctab';

const code = `import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  state = {
    count: 0,
  };

  onClickHandler = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const msg = \`Button clicked \${count} \${count > 1 ? 'times' : 'time'}\`;
    const marginBottom = 10;

    return (
      <>
        <button
          style={{ fontSize: 16, padding: '5px 15px', marginBottom: \`\${marginBottom}px\` }}
          onClick={this.onClickHandler}
        >
          Click
        </button>
        <div>{msg}</div>
      </>
    );
  }
}

export default Counter;
`;

const _Counter = () => (
  <DocTabTemplate code={code} codeExt="tsx">
    <Demo />
  </DocTabTemplate>
);

export default _Counter;
