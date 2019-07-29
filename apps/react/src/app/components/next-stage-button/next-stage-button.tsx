import React from 'react';

import './next-stage-button.css';
import { Button } from '@material-ui/core';
import AdapterLink from '../adapter-link';

/* tslint:disable:no-empty-interface */
export interface NextStageButtonProps {
  stage: number;
}

export const NextStageButton = (props: NextStageButtonProps) => {
  return (
    /*  tslint:disable-next-line */
    <Button
      component={AdapterLink}
      to={'/' + props.stage}
    >
      Next
    </Button>
  );
};

export default NextStageButton;
