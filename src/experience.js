import React from 'react'

import './experience.css'

export {ExperienceSection};


class ExperienceSection extends React.Component {
    constructor(props) {
        super(props);

        this.jobs = ["Synamedia", "Microchip", "ecobee", "Klashwerks", "University of Waterloo", "DataKinetics"];
        this.positions = ["Associate Software Engineer", "Software Engineer Coop", "Embedded Test Developer", "Software Developer", "Engineering PC Network Support Assistant", "Product Owner"];
        this.dates = ["May 2021 - Present", "Sep - Dec 2020", "Sep - Dec 2019", "Jan - Apr 2019", "Sep - Dec 2017, May - Aug 2018", "Jan - Apr 2017"];

        var jobStates = Array.from({ length: this.jobs.length }, (_, i) => i == 0 ? true : false);
        var jobHeaders = this.jobs.map((job, i) => <ExperienceSectionHeader key={job} text={job} selected={jobStates[i]} onClick={() => this.onJobHeaderClick(job)} />);

        this.state = {
            jobStates: jobStates,
            selectedJob: this.jobs[0],
            selectedPosition: this.positions[0],
            selectedDate: this.dates[0],
            jobHeaders: jobHeaders,
        };
    }

    onJobHeaderClick(job) {
        console.log("Selected " + job);
        var index = this.jobs.findIndex(element => element == job);

        if (index >= 0) {
            var jobStates = Array.from({ length: this.jobs.length }, (_, i) => i == index ? true : false);
            var jobHeaders = this.jobs.map((j, i) => <ExperienceSectionHeader key={j} text={j} selected={jobStates[i]} onClick={() => this.onJobHeaderClick(j)} />);

            this.setState({
                jobStates: jobStates,
                selectedJob: job,
                selectedPosition: this.positions[index],
                selectedDate: this.dates[index],
                jobHeaders: jobHeaders,
            });
        }
    }

    render() {
        return (
            <div id="experience" className="body-section">
                <h1>Experience</h1>
                <hr></hr>
                <div className="body-section-content">
                    <div className="body-experience">
                        <div className="body-experience-header">
                            {this.state.jobHeaders}
                        </div>
                        <div className="body-experience-divider"></div>
                        <ExperienceSectionBody job={this.state.selectedJob} position={this.state.selectedPosition} date={this.state.selectedDate} />
                    </div>
                </div>
            </div>
        );
    }
}

function ExperienceSectionHeader(props) {
    var color = "#EEEEEE";
    var fontWeight = 'normal';

    if (props.selected) {
        color = "#FEEDC7";
        fontWeight = 'bold';
    }

    return (
        <div className="body-experience-header-job" style={{ color: color, fontWeight: fontWeight }} onClick={props.onClick}>{props.text}</div>
    );
}

function ExperienceSectionBody(props) {
    return (
        <div className="body-experience-job-content">
            <h1>{props.position}</h1>
            <h2>{props.date}</h2>
        </div>
    );
}