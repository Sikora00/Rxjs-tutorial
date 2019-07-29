import React from 'react';

import './introduction.css';
import NextStageButton from '../../components/next-stage-button/next-stage-button';

/* tslint:disable:no-empty-interface */
export interface IntroductionProps {}

export const Introduction = (props: IntroductionProps) => {
  return (
    <div className="introduction__container">
      <h1>Before you start</h1>
      <p>
        To complete the task find the component whose srouce directory is wrote
        on the page of the task. Then replace source$ variable in ngOnInit with
        your own version of the observable. You can use all knowed operators.
        <br />
        You can find example solutions under libs/solutions in the file named
        same as source component or in the component code as comments. Uncomment
        the solution and comment blank source$ declaration to see how it works.{' '}
        <br />
        If you have problem with api you can find documentation{' '}
        <a href="https://jsonplaceholder.typicode.com/">here</a>
        <br />
        If you have any questions feel free to contact{' '}
        <a href="https://github.com/Sikora00">https://github.com/Sikora00</a>
        <br />I would be happy to see your solution :)
      </p>
      <NextStageButton stage={1} />
    </div>
  );
};

export default Introduction;
