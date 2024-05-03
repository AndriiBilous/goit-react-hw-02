import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import css from './App.module.css';

function App() {
  const [click, setClick] = useState(getItem);

  const keyClick = Object.keys(click);
  //==============Feedback==================
  const updateFeedback = feedbackType => {
    setClick({
      ...click,
      [feedbackType]: click[feedbackType] + 1,
    });
  };
  //==============Reset==================
  const resetFeedback = () => {
    setClick({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  //==============Effect======================================================================
  useEffect(() => {
    localStorage.setItem('my-clicks', JSON.stringify(click));
  }, [click]);

  const totalFeedback = click.good + click.neutral + click.bad;
  const percentages = Math.round((click.good / totalFeedback) * 100);
  // (click.good / (totalFeedback - click.neutral)) * 100 - В домашній роботі в відео, neutral - не впливає на %. Який залишити?

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <Description />
        <Options
          update={updateFeedback}
          keys={keyClick}
          total={totalFeedback}
          reset={resetFeedback}
        />
        {totalFeedback ? (
          <Feedback data={click} total={totalFeedback} positive={percentages} />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}
//=========LOCAL STORAGE===============================================
function getItem() {
  const storageItem = localStorage.getItem('my-clicks');
  if (storageItem !== null) {
    return JSON.parse(storageItem);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
}

export default App;
