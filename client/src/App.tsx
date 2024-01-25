import "./App.scss";
import { Logo } from "./components/logo/Logo";

import { StreakSection } from "./sections/streakSection/StreakSection";
import { StatsSection } from "./sections/statsSection/StatsSection";
import { HabitsAndGoalsSection } from "./sections/habitsAndGoalsSection/HabitsAndGoalsSection";
import { CalenderSection } from "./sections/calenderSection/CalenderSection";
import TimelineSection from "./sections/timelineSection/TimelineSection";
//rafce for new component

function App() {
  return (
    <div className="App">
      <Logo />
      <section className="mainGrid">
        <StatsSection />
        <StreakSection />
        <HabitsAndGoalsSection />
        <CalenderSection />
        <TimelineSection />
      </section>
    </div>
  );
}

export default App;
