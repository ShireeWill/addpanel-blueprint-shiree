import { createBoard } from '@wixc3/react-board';
import { Button } from '@blueprintjs/core';

export default createBoard({
    name: 'Button 1',
    Board: () => (
        <div>
            <Button
                icon="refresh"
                large={true}>
                Click to wiggle
            </Button>
        </div>
    ),
});
