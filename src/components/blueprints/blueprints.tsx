import styles from './blueprints.module.scss';
import classNames from 'classnames';
import { Toast } from '@blueprintjs/core';

export interface BlueprintsProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-blueprintss-and-templates
 */
export const Blueprints = ({ className, children = 'Blueprints' }: BlueprintsProps) => {
    return (
        <button className={classNames(styles.root, className)} onClick={() => <Toast  intent={'warning'} message={"Hi there mothafuckaaaa!"} />}>
            {children}
        </button>
    );
};
