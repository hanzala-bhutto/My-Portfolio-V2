import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { career, type CareerHighlight } from "../data/careers";

function Highlights({ highlights }: { highlights: CareerHighlight[] }) {
  return (
    <ul className="timeline-highlights">
      {highlights.map((h, idx) => {
        if (typeof h === "string") {
          return <li key={idx}>{h}</li>;
        }

        return (
          <li key={idx}>
            {h.text}
            {h.subpoints?.length ? (
              <ul>
                {h.subpoints.map((sp, spIdx) => (
                  <li key={spIdx}>{sp}</li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function Career() {
  return (
    <div id="career">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {career.map((item, idx) => (
            <VerticalTimelineElement
              key={`${item.company}-${item.date}-${idx}`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={item.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>

              {(item.location || item.workMode || item.employmentType) ? (
                <p>
                  {[item.location, item.workMode, item.employmentType].filter(Boolean).join(" · ")}
                </p>
              ) : null}

              {item.summary ? <p>{item.summary}</p> : null}
              {item.highlights?.length ? <Highlights highlights={item.highlights} /> : null}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Career;