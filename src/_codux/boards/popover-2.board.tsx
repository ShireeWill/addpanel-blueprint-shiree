import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Popover2, Classes } from '@blueprintjs/popover2';
import { Button, H5 } from '@blueprintjs/core';




export default createBoard({
    name: 'Popover2',
    Board: () => (
        <div>
            <Popover2
                popoverClassName={'bp4-popover2-content-sizing'}
                enforceFocus={false}
                content={<div key="text">
                    <H5>Confirm deletion</H5>
                    <p>Are you sure you want to delete these items? You won't be able to recover them.</p>
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                        <Button className={'bp4-popover2-dismiss'} style={{ marginRight: 10 }}>
                            Cancel
                        </Button>
                        <Button intent='danger' className={'bp4-popover2-dismiss'}>
                            Delete
                        </Button>
                    </div>
                </div>}
            >
                <Button intent='primary' text='Click me!' />
            </Popover2>
        </div>
    )
});
