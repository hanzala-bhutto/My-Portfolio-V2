import React, { useRef, useState } from "react";
import '../assets/styles/Career.scss'
import { career, type CareerHighlight } from "../data/careers";

function Highlights({ highlights }: { highlights: CareerHighlight[] }) {
  return (
    <ul className="career-highlights">
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
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectTab = (idx: number) => {
    setActiveIndex(idx);
    tabRefs.current[idx]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const lastIndex = career.length - 1;

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        selectTab(activeIndex === lastIndex ? 0 : activeIndex + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        selectTab(activeIndex === 0 ? lastIndex : activeIndex - 1);
        break;
      case "Home":
        e.preventDefault();
        selectTab(0);
        break;
      case "End":
        e.preventDefault();
        selectTab(lastIndex);
        break;
      default:
        break;
    }
  };

  const activeItem = career[activeIndex];

  return (
    <div id="career">
      <div className="items-container">
        <h1>Career History</h1>
        <div className="career-switcher">
          <div
            className="career-tabs"
            role="tablist"
            aria-orientation="vertical"
            aria-label="Career history"
            onKeyDown={handleKeyDown}
          >
            {career.map((item, idx) => {
              const selected = idx === activeIndex;
              return (
                <button
                  key={`${item.company}-${item.date}-${idx}`}
                  ref={(el) => { tabRefs.current[idx] = el; }}
                  role="tab"
                  id={`career-tab-${idx}`}
                  aria-selected={selected}
                  aria-controls="career-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`career-tab${selected ? " active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="career-tab-company">{item.company}</span>
                  <span className="career-tab-date">{item.date}</span>
                </button>
              );
            })}
          </div>

          <div
            className="career-detail"
            role="tabpanel"
            id="career-panel"
            aria-labelledby={`career-tab-${activeIndex}`}
            tabIndex={0}
          >
            <h3 className="career-detail-title">{activeItem.title}</h3>
            <h4 className="career-detail-subtitle">{activeItem.company}</h4>

            {(activeItem.location || activeItem.workMode || activeItem.employmentType) ? (
              <p className="career-detail-meta">
                {[activeItem.location, activeItem.workMode, activeItem.employmentType].filter(Boolean).join(" · ")}
              </p>
            ) : null}

            {activeItem.summary ? <p>{activeItem.summary}</p> : null}
            {activeItem.highlights?.length ? <Highlights highlights={activeItem.highlights} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
