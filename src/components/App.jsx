import { CounterFeedback } from "./CounterFeedback/CounterFeedback";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat',
      }}
    >
      <CounterFeedback></CounterFeedback>
    </div>
  );
};
