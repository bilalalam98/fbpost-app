import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvaImg({avatar}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={avatar}
        sx={{ width: 83, height: 83 }}
      />
    </Stack>
  );
}
