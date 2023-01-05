import React from 'react';
import { Switch } from '@mantine/core';


function MySwitch() {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
   
      return (
              <div>
              <Switch  color="red" sx={(backgroundColor) => ({ '.mantine-Switch-trackLabel'
              :{ backgroundColor:isSwitchOn ? 'red' : '' } })}
              onChange={() => setIsSwitchOn(!isSwitchOn)}/>
              </div>
            );
                    }
    
    export { MySwitch };