import css from './Feedback.module.css';
import clsx from 'clsx';
function Feedback({ positive, total, data: { good, neutral, bad } }) {
  return (
    <div className={css.container}>
      <p className={clsx(good > 0 && css.text)}>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p className={clsx(bad > 0 && css.bad)}>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p className={clsx(positive > 50 ? css.colortext : css.textcolor)}>
        Positive: {positive}%
      </p>
    </div>
  );
}
export default Feedback;
