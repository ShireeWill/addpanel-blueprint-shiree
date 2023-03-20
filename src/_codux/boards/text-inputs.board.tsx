import { createBoard } from '@wixc3/react-board';
import { InputGroup } from "@blueprintjs/core";


export default createBoard({
    name: 'Text input',
    Board: () =>
        <InputGroup
            placeholder="Enter your username..."
            leftIcon="user"
        />
});
