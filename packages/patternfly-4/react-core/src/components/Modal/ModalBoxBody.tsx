import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/ModalBox/modal-box.css';

export interface ModalBoxBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the ModalBoxBody */
  children?: React.ReactNode;
  /** Additional classes added to the ModalBoxBody */
  className?: string;
}

export const ModalBoxBody: React.FunctionComponent<ModalBoxBodyProps> = ({
  children = null,
  className = '',
  ...props
}: ModalBoxBodyProps) => (
  <div {...props} className={css(styles.modalBoxBody, className)}>
    {children}
  </div>
);
