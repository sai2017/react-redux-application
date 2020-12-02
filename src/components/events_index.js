import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents()
    // console.log(this.props.readEvents())
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <th>{event.id}</th>
        <th>{event.title}</th>
        <th>{event.body}</th>
      </tr>
    ))
  }

  render () {
    return(
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to='/events/new'>New Event</Link>
      </>
    )
  };
}

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
