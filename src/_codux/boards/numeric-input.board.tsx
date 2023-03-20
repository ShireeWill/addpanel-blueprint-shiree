import { createBoard } from '@wixc3/react-board';
import { NumericInput,} from "@blueprintjs/core";

export default createBoard({
    name: 'Numeric input',
    Board: () => {
        return (
            < NumericInput placeholder="Enter a number..." intent="primary" />
        );
    }
});
