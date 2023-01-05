import React from 'react';
import { Switch } from '@mantine/core';


function MySwitch() {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
   
      return (
              <div>
              <Switch  sx={(backgroundColor) => ({ '.mantine-Switch-trackLabel'
              :{ backgroundColor:isSwitchOn ? 'red' : 'grey' } })}
              onChange={() => setIsSwitchOn(!isSwitchOn)}/>
              </div>
            );
                    }
    
    export { MySwitch };