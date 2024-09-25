import {FallbackProps} from "react-error-boundary";

export function Fallback({resetErrorBoundary}: FallbackProps) {
  return (
    <div className="main">
      <p>Error encountered!!!</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
