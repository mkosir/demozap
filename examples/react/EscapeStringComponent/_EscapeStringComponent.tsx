import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './EscapeStringComponent.storytab';

const code = `import React, { PureComponent } from 'react';

class EscapeStringComponent extends PureComponent {
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

    return (
      <>
        <button onClick={this.onClickHandler}>Click</button>
        <div>{msg}</div>
      </>
    );
  }
}

export default EscapeStringComponent;
`;

const _EscapeStringComponent = () => (
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _EscapeStringComponent;
