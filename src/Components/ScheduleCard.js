import React, { Component } from 'react';
import './ScheduleCard.css';

class ScheduleCard extends Component {
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
    }

    render() {
        return (
            <div className="calendar-card-container">
                <div className="calendar-card"
                    ref={this.cardRef}
                    onClick={() => {
                        this.cardRef.current.classList.add("shake");
                    }}
                    onAnimationEnd={() => {
                        this.cardRef.current.classList.remove("shake");
                    }}
                    >
                    <div className="card-header">
                        <div className="calendar-box">
                            <div className="month">{this.props.event_month}</div>
                            <div className="day">{this.props.event_day}</div>
                        </div>
                        <div className="card-text-aside">
                            <div className="day-name">{this.props.event_title}</div>
                            <div className="time">{this.props.event_stime} {this.props.event_stimeap} - {this.props.event_etime} {this.props.event_etimeap}</div>
                            <div className="notes">{this.props.event_notes}</div>
                        </div>
                        <div className="calendar-right">
                            <i className="fa fa-calendar"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScheduleCard;