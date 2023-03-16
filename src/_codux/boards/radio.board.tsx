import { createBoard } from '@wixc3/react-board';
import { Radio, RadioGroup } from "@blueprintjs/core";

export default createBoard({
    name: 'Radio',
    Board: () => {
        const options: { label: string; value: string }[] = [
            { label: 'Choice 1', value: 'Choice 1' },
            { label: 'Choice 2', value: 'Choice 2' },
            { label: 'Choice 3', value: 'Choice 3' },

        ];

        return (
            <div>
                <RadioGroup
                    label="Meal Choice"
                    selectedValue={'Soup'}
                    onChange={() => undefined}
                >
                    {options.map((option) => (<Radio label={option.label} value={option.value} />))}
                </RadioGroup>
            </div>
        )
    }
});
