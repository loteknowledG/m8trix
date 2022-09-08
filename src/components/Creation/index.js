import { Fab, SvgIcon } from '@mui/material'

import GlassFab from '../glass/GlassFab'

const AddIcon = () => {
    return (
        <SvgIcon>
            <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </SvgIcon>
      )
} 

export function Creation () {
    return (<>
        <GlassFab color="primary" aria-label="add" sx={{ 
            pointerEvents: 'auto',
            position: 'absolute',
            bottom: 16,
            right: 16,
        }}>
            <AddIcon />
      </GlassFab>
    </>)
}
export default Creation