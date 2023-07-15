import * as React from 'react';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function LikesBadge() {
  return (
    <Badge badgeContent={0} color="primary">
      <FavoriteIcon color="action" />
    </Badge>
  );
}