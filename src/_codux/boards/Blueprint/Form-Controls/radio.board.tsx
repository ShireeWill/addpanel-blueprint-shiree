import { createBoard } from '@wixc3/react-board';
import { Radio, RadioGroup } from '@blueprintjs/core';
// board cover
import cover from '../../../../assets/form-controls/radio.svg';

export default createBoard({
    name: 'Radio',
    Board: () => {
        const options: { label: string; value: string }[] = [
            { label: 'Soup', value: 'Soup' },
            { label: 'Salad', value: 'Salad' },
            { label: 'Sandwitch', value: 'Sandwitch' },
        ];

        return (
            <div>
                <RadioGroup
                    label="Determine lunch"
                    selectedValue={'Soup'}
                    onChange={() => undefined}
                >
                    {options.map((option) => (
                        <Radio label={option.label} value={option.value} />
                    ))}
                </RadioGroup>
            </div>
        );
    },
    tags: ['radio','form','controls'],
    cover,
});
