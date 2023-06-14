import { createBoard } from '@wixc3/react-board';
import { FileInput, FormGroup, H5, InputGroup } from '@blueprintjs/core';

export default createBoard({
    name: 'File input',
    Board: () => <FileInput text={'Choose file...'} buttonText={'Browse'} />
});
