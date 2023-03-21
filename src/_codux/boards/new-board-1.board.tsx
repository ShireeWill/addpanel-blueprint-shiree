import { useCallback, useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button, Intent, TagInput, TagProps } from "@blueprintjs/core";

export default createBoard({
    name: 'Tag input',
    Board: () => {
         const DEFAULT_VALUES = ["George", "Fiz", "Lisa"];

        const [values, setValues] = useState<React.ReactNode[]>(DEFAULT_VALUES);

        const handleChange = (newValues: React.ReactNode[]) => {
            setValues(newValues);
        };

        const handleClear = useCallback(() => {
            handleChange(values.length > 0 ? [] : DEFAULT_VALUES)
        }, []);

        const clearButton = (
            <Button
                icon={values.length > 1 ? "cross" : "refresh"}
                minimal={true}
                onClick={handleClear}
            />
        );

        return <TagInput
            fill={true}
            leftIcon="user"
            onChange={handleChange}
            placeholder="Separate values with commas..."
            rightElement={clearButton}
            values={values}
        />
    }
});
