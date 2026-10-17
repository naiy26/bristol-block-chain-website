export function Art({
  variant = "blocks",
  className = "",
}: {
  variant?: string;
  className?: string;
}) {
  return (
    <div className={`art art-${variant} ${className}`} aria-hidden="true">
      <div className="art-grid" />
      {variant === "code" ? (
        <div className="code-window">
          <div className="window-dots">● ● ●</div>
          <code>
            <span>contract</span> HelloWorld {"{"}
            <br />
            &nbsp; <span>string</span> public message;
            <br />
            &nbsp; <span>function</span> build() {"{"}
            <br />
            &nbsp; &nbsp; dream.into(reality);
            <br />
            &nbsp; {"}"}
            <br />
            {"}"}
          </code>
        </div>
      ) : variant === "orbits" || variant === "rings" ? (
        <div className="orbital">
          <i />
          <i />
          <i />
          <b />
        </div>
      ) : (
        <div className="cube-group">
          <div className="cube cube-one">
            <i />
            <b />
            <span />
          </div>
          <div className="cube cube-two">
            <i />
            <b />
            <span />
          </div>
          <div className="cube cube-three">
            <i />
            <b />
            <span />
          </div>
        </div>
      )}
      <span className="art-spark spark-one">+</span>
      <span className="art-spark spark-two">+</span>
    </div>
  );
}
