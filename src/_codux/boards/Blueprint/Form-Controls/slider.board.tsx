import { createBoard } from '@wixc3/react-board';
import React, { useState } from 'react';
import { H5, Slider, Switch } from '@blueprintjs/core';
// board cover
import cover from '../../../../assets/form-controls/slider.svg';

export default createBoard({
    name: 'Slider',
    Board: () => {
        const [value, setValue] = useState(0.4);
        const renderLabel = (val: number) => `${Math.round(val * 100)}%`;

        return (
            <div>
                <Slider
                    min={0}
                    max={1}
                    stepSize={0.25}
                    labelStepSize={0.5}
                    onChange={setValue}
                    labelRenderer={renderLabel}
                    value={value}
                    vertical={false}
                />
            </div>
        );
    },
    tags: ['slider','form','controls'],
    cover,
});
