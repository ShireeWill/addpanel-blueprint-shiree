import { createBoard } from '@wixc3/react-board';
import React, { } from 'react';


export default createBoard({
    name: 'Button Group',
    Board: () => {
        return (
            <Example options={options} {...this.props}>
                {/* set `minWidth` so `alignText` will have an effect when vertical */}
                <ButtonGroup style={{ minWidth: 200 }} {...bgProps}>
                    <Button {...buttonProps} icon="database" text={iconOnly ? undefined : "Queries"} />
                    <Button {...buttonProps} icon="function" text={iconOnly ? undefined : "Functions"} />
                    <AnchorButton
                        {...buttonProps}
                        icon="cog"
                        rightIcon="settings"
                        text={iconOnly ? undefined : "Options"}
                    />
                </ButtonGroup>
            </Example>
        );
    }
});
