import { useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { InputGroup, Button } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";


export default createBoard({
    name: 'Text input Password',
    Board: () => {
        const [showPassword, setShowPassword] = useState(false);

        const lockButton = (
            // <Tooltip2 content={`${showPassword ? "Hide" : "Show"} Password`}>
            <Button
                icon={showPassword ? "unlock" : "lock"}
                intent="warning"
                minimal={true}
                onClick={() => setShowPassword(shouldShowPassword => !shouldShowPassword)}
            />
            // </Tooltip2>
        );

        return (
            <InputGroup
                placeholder="Enter your password..."
                rightElement={lockButton}
                type={showPassword ? "text" : "password"}
            />
        );
    }
});
