import { createBoard } from '@wixc3/react-board';
import { Alignment, Checkbox, H5, Label, Switch } from '@blueprintjs/core';

export default createBoard({
    name: 'Checkbox',
    Board: () => <div>
        <Label>Assign responsibility</Label>
        <Checkbox label="Gilad Gray" defaultIndeterminate={true} alignIndicator="left" />
        <Checkbox label="Jason Killian" />
        <Checkbox label="Antoine Llorca" />
    </div>
});
