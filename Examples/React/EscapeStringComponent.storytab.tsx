import React, { PureComponent } from 'react';

class EscapeStringComponent extends PureComponent {
  state = {
    eventType: null,
    trackOnEnter: true,
    trackOnLeave: true,
  };

  onEnter = eventType => {
    if (!this.state.trackOnEnter) {
      return;
    }
    this.setState({
      eventType: `'onEnter' triggered by '${eventType}'`,
    });
  };

  onLeave = eventType => {
    if (!this.state.trackOnLeave) {
      return;
    }
    this.setState({
      eventType: `'onLeave' triggered by '${eventType}'`,
    });
  };

  render() {
    const { eventType, trackOnEnter, trackOnLeave } = this.state;

    return (
      <div className="parallax-events-all">
        <div className="event-type">
          Track events:
          <label>
            <input
              onChange={this.toggleCheck}
              checked={trackOnMove}
              name={'trackOnMove'}
              type="checkbox"
            />
            onMove
          </label>
          <label>
            <input
              onChange={this.toggleCheck}
              checked={trackOnEnter}
              name={'trackOnEnter'}
              type="checkbox"
            />
            onEnter
          </label>
          <label>
            <input
              onChange={this.toggleCheck}
              checked={trackOnLeave}
              name={'trackOnLeave'}
              type="checkbox"
            />
            onLeave
          </label>
          {eventType && <div>Event {eventType} event type.</div>}
        </div>
      </div>
    );
  }
}

export default EscapeStringComponent;
