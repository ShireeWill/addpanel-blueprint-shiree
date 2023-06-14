import { createBoard } from '@wixc3/react-board';
import { Button } from '@blueprintjs/core';

export default createBoard({
    name: 'Primary Button',
    Board: () => (
        <div>
            <Button large={true} intent="primary">
                Primary
            </Button>
        </div>
    ),
});
