
import { createBoard } from '@wixc3/react-board';
import React from 'react';
import { Alert, Button, H5, Intent, Toaster, ToasterInstance } from "@blueprintjs/core";

export default createBoard({
    name: 'Alert',
    Board: () => {

        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div>
                <Button onClick={() => setIsOpen(true)} text="Open file error alert" />
                <Alert
                    //className={this.props.data.themeName}
                    confirmButtonText="Okay"
                    isOpen={isOpen}
                    loading={false}
                //onClose={confirmed: boolean, evt?: React.SyntheticEvent<HTMLElement>}
                >
                    <p>
                        Couldn't create the file because the containing folder doesn't exist anymore. You will be
                        redirected to your user folder.
                    </p>
                </Alert>


            </div>
        );
    },
    environmentProps: {
        canvasHeight: 89
    }
});
