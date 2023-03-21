import { createBoard } from '@wixc3/react-board';
import { Alignment, H5, Label, Switch } from '@blueprintjs/core';

export default createBoard({
    name: 'Switch',
    Board: () => {

        const checkboxOptions: { name: string, isChosen?: boolean }[] = [
            { name: "Gilad Gray", isChosen: true },
            { name: "Jason Killian", isChosen: false },
            { name: "Antoine Llorca" }
        ];

        return (
            <div>
                <Label>Assign responsibility</Label>
                {checkboxOptions.map(option => <Switch label={option.name} checked={option.isChosen} />)}
            </div>
        )
    }
});
