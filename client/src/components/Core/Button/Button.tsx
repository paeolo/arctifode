import React from 'react';

import { ButtonBase } from './Base';
import { ButtonGroupFC } from './Group';

const ButtonFC = ButtonBase<{}>(props => <button type="button" {...props} />);
const ButtonLinkFC = ButtonBase<{ href?: string }>(props => <a {...props} />);
const ButtonResetFC = ButtonBase<{}>(props => <button type="reset" {...props} />);
const ButtonSubmitFC = ButtonBase<{}>(props => <button type="submit" {...props} />);

export const Button = Object.assign(
  ButtonFC,
  {
    displayName: 'Button',
    Group: ButtonGroupFC,
    Link: ButtonLinkFC,
    Reset: ButtonResetFC,
    Submit: ButtonSubmitFC,
  }
);
