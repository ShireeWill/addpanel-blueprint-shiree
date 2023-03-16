import { createBoard } from '@wixc3/react-board';
import { Button } from '@blueprintjs/core';

export default createBoard({
    name: 'Button/large/Icon/Intent',
    Board: () => (
            <div>
                <Button
                    icon="refresh"
                    large={true}
                    intent="danger">
                    Reset
                </Button>
            </div>
    ),
});
