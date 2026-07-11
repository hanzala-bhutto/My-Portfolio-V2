import React, { useRef, useState } from "react";
import '../assets/styles/TabSwitcher.scss'
import { education } from "../data/education";

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectTab = (idx: number) => {
    setActiveIndex(idx);
    tabRefs.current[idx]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const lastIndex = education.length - 1;

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

  const activeItem = education[activeIndex];

  return (
    <div id="education">
      <div className="items-container">
        <h1>Education History</h1>
        <div className="tab-switcher">
          <div
            className="tab-list"
            role="tablist"
            aria-orientation="vertical"
            aria-label="Education history"
            onKeyDown={handleKeyDown}
          >
            {education.map((item, idx) => {
              const selected = idx === activeIndex;
              return (
                <button
                  key={`${item.institution}-${item.date}-${idx}`}
                  ref={(el) => { tabRefs.current[idx] = el; }}
                  role="tab"
                  id={`education-tab-${idx}`}
                  aria-selected={selected}
                  aria-controls="education-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`tab-list-item${selected ? " active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="tab-list-item-title">{item.institution}</span>
                  <span className="tab-list-item-subtitle">{item.date}</span>
                </button>
              );
            })}
          </div>

          <div
            className="tab-detail"
            role="tabpanel"
            id="education-panel"
            aria-labelledby={`education-tab-${activeIndex}`}
            tabIndex={0}
          >
            <h3 className="tab-detail-title">{activeItem.title}</h3>
            <h4 className="tab-detail-subtitle">{activeItem.institution}</h4>
            {activeItem.grade ? <p className="tab-detail-meta">Grade: {activeItem.grade}</p> : null}
            {activeItem.summary ? <p>{activeItem.summary}</p> : null}
            {activeItem.highlights?.length ? (
              <ul className="tab-highlights">
                {activeItem.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
