import { createBoard } from '@wixc3/react-board';
import { Alignment, Checkbox, H5, Label, Switch } from '@blueprintjs/core';

export default createBoard({
    name: 'Checkbox',
    Board: () => {

        const checkboxOptions: { name: string, isChosen?: boolean }[] = [
            { name: "Gilad Gray", isChosen: true },
            { name: "Jason Killian", isChosen: false },
            { name: "Antoine Llorca" }
        ];

        return (
            <div>
                <Label>Assign responsibility</Label>
                {checkboxOptions.map(option => <Checkbox label={option.name} checked={option.isChosen} />)}
            </div>
        )
    }
});
