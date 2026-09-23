"use client";

/* eslint-disable @next/next/no-img-element -- Existing source photos are compressed and served directly. */

import { KeyboardEvent, useState } from "react";

type TabKeyEvent = KeyboardEvent<HTMLButtonElement>;

function moveTabFocus(
  event: TabKeyEvent,
  currentIndex: number,
  itemCount: number,
  setActiveIndex: (index: number) => void,
) {
  const keyDirection =
    event.key === "ArrowRight" || event.key === "ArrowDown"
      ? 1
      : event.key === "ArrowLeft" || event.key === "ArrowUp"
        ? -1
        : 0;

  if (!keyDirection && event.key !== "Home" && event.key !== "End") {
    return;
  }

  event.preventDefault();
  const nextIndex =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? itemCount - 1
        : (currentIndex + keyDirection + itemCount) % itemCount;

  setActiveIndex(nextIndex);
  const tabList = event.currentTarget.parentElement;
  tabList?.querySelectorAll<HTMLButtonElement>("[role='tab']")[nextIndex]?.focus();
}

const challenges = [
  {
    title: "Skilled workers are difficult to replace",
    body: "Critical production knowledge often lives with individual people and can be hard to reproduce across shifts or facilities.",
    signal: "Knowledge continuity",
  },
  {
    title: "Tasks keep changing",
    body: "Products, parts, and processes change, while conventional automation is usually built around a fixed sequence.",
    signal: "Production flexibility",
  },
  {
    title: "Reprogramming adds friction",
    body: "Adapting a traditional robot to new work can require specialized programming and additional integration effort.",
    signal: "Adaptation effort",
  },
];

export function ChallengeExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChallenge = challenges[activeIndex];

  return (
    <div className="challenge-explorer">
      <div
        className="challenge-tabs"
        role="tablist"
        aria-label="Manufacturing challenges"
        aria-orientation="vertical"
      >
        {challenges.map((challenge, index) => (
          <button
            id={`challenge-tab-${index}`}
            key={challenge.title}
            type="button"
            role="tab"
            aria-controls="challenge-panel"
            aria-selected={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) =>
              moveTabFocus(event, index, challenges.length, setActiveIndex)
            }
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{challenge.title}</strong>
            <i aria-hidden="true">→</i>
          </button>
        ))}
      </div>

      <div
        className="challenge-panel"
        id="challenge-panel"
        role="tabpanel"
        aria-labelledby={`challenge-tab-${activeIndex}`}
        key={activeChallenge.title}
      >
        <span className="challenge-signal">{activeChallenge.signal}</span>
        <span className="challenge-watermark" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <h4>{activeChallenge.title}</h4>
        <p>{activeChallenge.body}</p>
      </div>
    </div>
  );
}

const capabilities = [
  {
    title: "Learning from human demonstrations",
    shortTitle: "Demonstration learning",
    body: "AIMEX is designed to learn assembly work from examples performed by people, capturing practical know-how without programming every motion by hand.",
    image: "/images/manufacturing-workcell.jpg",
    alt: "Industrial robot arm operating in a manufacturing workcell",
    caption: "Industrial workcell",
  },
  {
    title: "Computer vision and perception",
    shortTitle: "Vision & perception",
    body: "Cameras and vision models help the system interpret the work area, the objects involved, and what is happening during a task.",
    image: "/images/perception-visualization.jpg",
    alt: "Color-coded machine vision view of industrial equipment",
    caption: "Visual perception data",
  },
  {
    title: "Simulation and synthetic data",
    shortTitle: "Simulation",
    body: "Simulation creates controlled environments and additional training data before work moves to physical equipment.",
    image: "/images/perception-visualization.jpg",
    alt: "Color-coded visualization of an industrial environment",
    caption: "Digital development context",
  },
  {
    title: "Robot integration",
    shortTitle: "Robot integration",
    body: "The team connects perception and learned actions with cameras, grippers, and industrial robot arms in the lab.",
    image: "/images/manufacturing-workcell.jpg",
    alt: "Industrial robot and end effector in a manufacturing cell",
    caption: "Physical robot system",
  },
];

export function TechnologyExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="technology-explorer">
      <div className="technology-controls">
        <div className="technology-control-heading">
          <span>Explore the stack</span>
          <strong>04 connected capabilities</strong>
        </div>
        <div role="tablist" aria-label="AIMEX capabilities">
          {capabilities.map((capability, index) => (
            <button
              id={`capability-tab-${index}`}
              key={capability.title}
              type="button"
              role="tab"
              aria-controls={`capability-panel-${index}`}
              aria-selected={activeIndex === index}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) =>
                moveTabFocus(event, index, capabilities.length, setActiveIndex)
              }
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{capability.shortTitle}</strong>
              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>
      </div>

      <div className="technology-stage">
        {capabilities.map((capability, index) => (
          <div
            className="technology-stage-panel"
            id={`capability-panel-${index}`}
            key={capability.title}
            role="tabpanel"
            aria-labelledby={`capability-tab-${index}`}
            hidden={activeIndex !== index}
          >
            <img
              src={capability.image}
              alt={capability.alt}
              width={index === 0 || index === 3 ? 1400 : 1000}
              height={index === 0 || index === 3 ? 933 : 566}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="technology-stage-shade" />
            <span className="technology-stage-caption">
              {capability.caption}
            </span>
            <div className="technology-stage-copy">
              <span>{String(index + 1).padStart(2, "0")} / AIMEX</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const workflowSteps = [
  {
    title: "Demonstrate",
    body: "A person performs the task while cameras capture the work area, objects, and motion.",
  },
  {
    title: "Interpret",
    body: "Perception and learning models organize the scene and the sequence of actions involved.",
  },
  {
    title: "Transfer",
    body: "The task is tested in simulation and connected to a physical robot workcell.",
  },
];

export function WorkflowExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = workflowSteps[activeIndex];

  return (
    <div className="workflow-explorer" data-step={activeIndex + 1}>
      <div className="workflow-visual">
        <img
          src="/images/perception-visualization.jpg"
          alt="Color-coded machine vision view of industrial equipment"
          width="1000"
          height="566"
          loading="lazy"
        />
        <span className="workflow-image-label">Visual perception data</span>
        <span className="workflow-focus-ring" aria-hidden="true" />
      </div>

      <div className="workflow-console">
        <div
          className="workflow-tabs"
          role="tablist"
          aria-label="AIMEX development workflow"
        >
          {workflowSteps.map((step, index) => (
            <button
              id={`workflow-tab-${index}`}
              key={step.title}
              type="button"
              role="tab"
              aria-controls="workflow-panel"
              aria-selected={activeIndex === index}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) =>
                moveTabFocus(event, index, workflowSteps.length, setActiveIndex)
              }
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step.title}
            </button>
          ))}
        </div>
        <div
          className="workflow-detail"
          id="workflow-panel"
          role="tabpanel"
          aria-labelledby={`workflow-tab-${activeIndex}`}
          key={activeStep.title}
        >
          <span>Step {String(activeIndex + 1).padStart(2, "0")}</span>
          <h4>{activeStep.title}</h4>
          <p>{activeStep.body}</p>
        </div>
      </div>
    </div>
  );
}

const productLayers = [
  {
    scope: "Workcell",
    title: "AIMEX",
    status: "Current development focus",
    body: "The primary platform under development, focused on learning from human demonstrations and executing robot tasks within an individual workcell.",
  },
  {
    scope: "Production line",
    title: "AIM Tower",
    status: "Planned direction",
    body: "A planned line-level layer intended to coordinate robot work and production flow across multiple workcells.",
  },
  {
    scope: "System architecture",
    title: "AIM AIOS",
    status: "Broader architecture",
    body: "The broader software architecture intended to connect workcell learning and execution with line-level coordination.",
  },
];

export function ProductArchitecture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLayer = productLayers[activeIndex];

  return (
    <div className="architecture-explorer">
      <div
        className="architecture-map"
        role="tablist"
        aria-label="AIM product architecture"
      >
        {productLayers.map((layer, index) => (
          <button
            id={`architecture-tab-${index}`}
            key={layer.title}
            type="button"
            role="tab"
            aria-controls="architecture-panel"
            aria-selected={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) =>
              moveTabFocus(event, index, productLayers.length, setActiveIndex)
            }
          >
            <span>{layer.scope}</span>
            <strong>{layer.title}</strong>
          </button>
        ))}
      </div>

      <div
        className="architecture-panel"
        id="architecture-panel"
        role="tabpanel"
        aria-labelledby={`architecture-tab-${activeIndex}`}
        key={activeLayer.title}
      >
        <div className="architecture-panel-meta">
          <span>{activeLayer.scope}</span>
          <i>{activeLayer.status}</i>
        </div>
        <span className="architecture-mark" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <h3>{activeLayer.title}</h3>
        <p>{activeLayer.body}</p>
      </div>
    </div>
  );
}
