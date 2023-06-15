import { createBoard } from '@wixc3/react-board';
import { FormGroup, H5, InputGroup, Intent, Switch } from "@blueprintjs/core";
// board cover
import cover from '../../../../assets/form-controls/form-group1.svg';

export default createBoard({
    name: 'Form Group',
    Board: () => {
        return (
            <div>
                <FormGroup
                    disabled={false}
                    intent="none"
                    label={"Label"}
                    labelFor="text-input"
                >
                    <InputGroup id="text-input" placeholder="Placeholder text" intent={'none'} />
                </FormGroup>
            </div>
        );
    }
    tags: ['form', 'group', 'input'],
    cover,
});
