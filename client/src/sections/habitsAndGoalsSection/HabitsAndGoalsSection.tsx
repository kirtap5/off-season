import { GoalsSection } from "./GoalsSection";
import "./HabitsAndGoalsSection.scss";
import { HabitsSection } from "./HabitsSection";

export const HabitsAndGoalsSection = () => {
  return (
    <div className="HabitsAndGoalsSection">
      <HabitsSection />
      <GoalsSection />
    </div>
  );
};
