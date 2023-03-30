import { createBoard } from '@wixc3/react-board';
import React from 'react';
import { H5, Icon, IconSize, Intent, Label, Slider } from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons";


export default createBoard({
    name: 'Icon',
    Board: () => <Icon icon={'calendar'} size={30} intent="primary" />
});
