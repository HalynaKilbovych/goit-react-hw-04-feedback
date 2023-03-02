import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Counter } from 'components/Counter/Counter';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { Container } from './CounterFeedback.styled';

export class CounterFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandle = e => {
    const { name } = e.currentTarget;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const positive = (good / total) * 100;
    return Math.round(positive) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <Counter
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickHandle}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}