import { Route, Link } from 'react-router-dom';
import React from 'react';

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

export default AdapterLink;
