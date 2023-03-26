import { createBoard } from '@wixc3/react-board';
import { Popover2 } from '@blueprintjs/popover2';

export default createBoard({
    name: 'Popover2',
    Board: () => <div>
        <Popover2 />
    </div>
});
