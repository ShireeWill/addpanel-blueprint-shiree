import { createBoard } from '@wixc3/react-board';
import { Button } from '@blueprintjs/core';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div>
            <Button>Click to wiggle</Button>
        </div>
    ),
});
