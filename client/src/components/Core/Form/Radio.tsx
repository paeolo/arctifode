import React from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type IFormik = {
  values: object;
  handleChange: ((event: string | React.ChangeEvent<any>) => void);
};

export type RadioProps = {
  id: string;
  formik: IFormik;
  value: any;
  inline?: boolean;
};

export const Radio: React.FC<RadioProps> = props => {

  return (
    <label className={classNames.bind(styles)(
      'form-radio',
      {
        'form-inline': props.inline
      }
    )}>
      <input
        id={props.id}
        value={props.value}
        checked={props.formik.values[props.id] === props.value}
        onChange={props.formik.handleChange}
        type="radio" />
      <i className={classNames.bind(styles)('form-icon')} />
      {props.children}
    </label>
  );
}
