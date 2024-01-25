import "./StatsSection.scss";
export const StatsSection = () => {
  return (
    <div className="statsSection">
      <h2 className="title">Stats & Traits</h2>
      <hr className="underline" />
      <div className="statsContainer">
        <div className="statCell smallText">
          <p className="label">Programming: </p>
          <p className="value"> 2.3</p>
        </div>
      </div>
    </div>
  );
};
