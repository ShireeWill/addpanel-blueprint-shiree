import { createBoard } from '@wixc3/react-board';
import React, { useState } from 'react';
import { H5, Slider, Switch } from "@blueprintjs/core";

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
                    stepSize={0.01}
                    labelStepSize={0.1}
                    onChange={setValue}
                    labelRenderer={renderLabel}
                    value={value}
                    vertical={false}
                />
            </div>
        );
    },
    environmentProps: {
        canvasWidth: 604
    }
});
