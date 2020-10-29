import React, { Component } from 'react';
import { Query } from 'react-apollo';
import ScheduleCard from './Components/ScheduleCard';
import { GET_SCHEDULES } from './queries';

class Viewer extends Component {
  render() {
    return (
      <Query query={GET_SCHEDULES}>
        {({ loading, error, data }) => {
          if (loading) {
            return (<div style={{"textAlign": "center"}}>LOADING.....</div>);
          }
          if (error) return (console.log(error));

          if (data.schedules.length) {
            return (
              <div style={{ "paddingBottom": "6rem" }}>
                {data.schedules.map(schedule => (
                  <ScheduleCard
                    key={schedule.id}
                    event_title={schedule.title}
                    event_day={schedule.day}
                    event_month={schedule.month}
                    event_stime={schedule.s_time}
                    event_stimeap={schedule.s_time_ap}
                    event_etime={schedule.e_time}
                    event_etimeap={schedule.e_time_ap}
                    event_notes={schedule.notes}
                  />
                ))}
              </div>
            );
          }

          else{
            return (<div style={{"textAlign": "center"}}>Get something scheduled!</div>);
          }
        }}
      </Query>
    );
  }
}

export default Viewer;