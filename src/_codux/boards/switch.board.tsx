import { createBoard } from '@wixc3/react-board';
import { Alignment, H5, Label, Switch } from '@blueprintjs/core';

// board cover
import cover from '../../../../assets/form-controls/switch.svg';

export default createBoard({
    name: 'Switch',
    Board: () => {
        const checkboxOptions: { name: string; isChosen?: boolean }[] = [
            { name: 'Enabled', isChosen: false },
            { name: 'Public', isChosen: false },
            { name: 'Cooperative', isChosen: true },
        ];

        return (
            <div>
                <Label>Privacy Settings</Label>
                {checkboxOptions.map((option) => (
                    <Switch label={option.name} checked={option.isChosen} />
                ))}
            </div>
        );
    },
});
