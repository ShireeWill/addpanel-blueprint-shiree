import { createBoard } from '@wixc3/react-board';
import { FormGroup, H5, InputGroup, Intent, Switch } from "@blueprintjs/core";
// board cover
import cover from '../../../../assets/form-controls/form-group2.svg';

export default createBoard({
    name: 'Form Group Options',
    Board: () => {
        return (
            <div>
                <FormGroup
                    disabled={false}
                    intent="none"
                    label={"Label"}
                >
                    <Switch label="Engage the hyperdrive" disabled={false} />
                    <Switch label="Initiate thrusters" disabled={false} />
                </FormGroup>
            </div>
        );
    }
    tags: ['form', 'group'],
    cover,
});
