import { createBoard } from '@wixc3/react-board';
import React, { useState } from 'react';
import { FormGroup, H5, InputGroup, Intent, Switch } from "@blueprintjs/core";

export default createBoard({
    name: 'Form Group',
    Board: () => {
        return (
            <div>
                <FormGroup
                    disabled={false}
                    intent="none"
                    label={"Label"}
                    labelFor="text-input"
                    subLabel={"Label helper text with details..."}
                >
                    <InputGroup id="text-input" placeholder="Placeholder text" intent={'none'} />
                </FormGroup>

                <FormGroup
                    disabled={false}
                    intent="none"
                    label={"Label"}
                >
                    <Switch label="Engage the hyperdrive" disabled={false} />
                    <Switch label="Initiate thrusters" disabled={false} />
                </FormGroup>
            </div>
        );
    }
});
