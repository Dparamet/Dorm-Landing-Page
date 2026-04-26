export default function ProblemSolutionSection({ content }) {
  return (
    <section className="section" id="problem-solution">
      <div className="container two-col">
        <article className="panel">
          <h2>{content.problemTitle}</h2>
          <p>{content.problemText}</p>
        </article>
        <article className="panel panel-accent">
          <h2>{content.solutionTitle}</h2>
          <p>{content.solutionText}</p>
        </article>
      </div>
    </section>
  );
}
