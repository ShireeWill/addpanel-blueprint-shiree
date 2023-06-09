import { createBoard } from '@wixc3/react-board';
import React, { useState,useCallback } from 'react';
import { Alert, Button, H5, Intent, Toaster, ToasterInstance } from "@blueprintjs/core";

// board cover
import cover from '../../../../assets/alert/alert.svg';

export default createBoard({
    name: 'Alert',
    Board: () => {
        const [isOpen, setIsOpen] = useState(false);
        const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);
        
        return (
            <div>
                <Button onClick={() => setIsOpen(true)} text="Open file error alert" />
                <Alert
                    confirmButtonText="Okay"
                    isOpen={isOpen}
                    loading={false}
                    onClose={onClose}
                >
                    <p>
                        Couldn't create the file because the containing folder doesn't exist anymore. You will be
                        redirected to your user folder.
                    </p>
                </Alert>


            </div>
        );
    },
    tags: ['alert', 'error'],
    cover,
});
