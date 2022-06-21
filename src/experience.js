import React from 'react'

import experienceData from './data/experience.json'
import './css/experience.css'
import './css/mobile/experience.css'

export {ExperienceSection};


class ExperienceSection extends React.Component {
    constructor(props) {
        super(props);

        var jobStates = Array.from({ length: experienceData.length }, (_, i) => i == 0 ? true : false);
        var jobContent = experienceData[0].description.map((job, i) => <li>{job}</li>);
        var jobHeaders = experienceData.map((job, i) => <ExperienceSectionHeader key={job.title} text={job.title} selected={jobStates[i]} onClick={() => this.onJobHeaderClick(job.title)} />);
        var jobHeadersMobile = experienceData.map((job, i) => <ExperienceSectionHeaderMobile key={job.title} text={job.title} selected={jobStates[i]} selectedJob={experienceData[0].title} selectedDate={experienceData[0].date} selectedPosition={experienceData[0].position} jobContent={jobContent} onClick={() => this.onJobHeaderClick(job.title)} />);

        var isMobile = window.innerWidth < 1024;

        this.state = {
            isMobile: isMobile,
            jobStates: jobStates,
            selectedJob: experienceData[0].title,
            selectedPosition: experienceData[0].position,
            selectedDate: experienceData[0].date,
            jobHeaders: jobHeaders,
            jobHeadersMobile: jobHeadersMobile,
            jobContent: jobContent,
        };

        this.updateWindowSize = this.updateWindowSize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowSize);
    }

    updateWindowSize() {
        console.log("updateWindowSize");
        var isMobile = window.innerWidth < 1024;

        this.setState({
            isMobile: isMobile
        });
    }

    onJobHeaderClick(job) {
        console.log("Selected " + job);
        var index = experienceData.findIndex(element => element.title == job);

        if (index >= 0) {
            var jobStates = Array.from({ length: experienceData.length }, (_, i) => i == index ? true : false);
            var jobContent = experienceData[index].description.map((job, i) => <li>{job}</li>);
            var jobHeaders = experienceData.map((job, i) => <ExperienceSectionHeader key={job.title} text={job.title} selected={jobStates[i]} job={experienceData[index].title} position={experienceData[index].position} date={experienceData[index].date} content={jobContent} onClick={() => this.onJobHeaderClick(job.title)} />);
            var jobHeadersMobile = experienceData.map((job, i) => <ExperienceSectionHeaderMobile key={job.title} text={job.title} selected={jobStates[i]} selectedJob={experienceData[index].title} selectedDate={experienceData[index].date} selectedPosition={experienceData[index].position} jobContent={jobContent} onClick={() => this.onJobHeaderClick(job.title)} />);

            this.setState({
                jobStates: jobStates,
                selectedJob: experienceData[index].title,
                selectedPosition: experienceData[index].position,
                selectedDate: experienceData[index].date,
                jobHeaders: jobHeaders,
                jobHeadersMobile: jobHeadersMobile,
                jobContent: jobContent,
            });
        }
    }

    render() {
        if (this.state.isMobile) {
            return (
                <div id="experience" className="body-section">
                    <h1 className="body-section-header">Experience</h1>
                    <hr></hr>
                    <div className="body-section-content">
                        <div className="body-experience">
                                {this.state.jobHeadersMobile}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div id="experience" className="body-section">
                    <h1 className="body-section-header">Experience</h1>
                    <hr></hr>
                    <div className="body-section-content">
                        <div className="body-experience">
                            <div className="body-experience-header">
                                {this.state.jobHeaders}
                            </div>
                            <div className="body-experience-divider"></div>
                            <ExperienceSectionBody job={this.state.selectedJob} position={this.state.selectedPosition} date={this.state.selectedDate} content={this.state.jobContent} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

function ExperienceSectionHeaderMobile(props) {
    var color = "#EEEEEE";
    var fontWeight = 'normal';

    if (props.selected) {
        color = "#FEEDC7";
        fontWeight = 'bold';

        return (
            <div>
                <div className="body-experience-header-job" style={{ color: color, fontWeight: fontWeight }} onClick={props.onClick}>{props.text}</div>
                <ExperienceSectionBody job={props.selectedJob} position={props.selectedPosition} date={props.selectedDate} content={props.jobContent} />
            </div>
        );
    }
    else {
        return (
            <div className="body-experience-header-job" style={{ color: color, fontWeight: fontWeight }} onClick={props.onClick}>{props.text}</div>
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
            <ul>
                {props.content}
            </ul>
        </div>
    );
}