import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';

import { red, purple, yellow, orange, lightGreen, pink, grey, green, blue, brown } from '@mui/material/colors';
interface SelectChipColor {
  [color: string]: ActionComponentColor;
}
interface ActionComponentColor {
  bg: string;
  text: string;
}

// TODO: module화 해서 밖으로 빼기;;;
const notionSelect: SelectChipColor = {
  red: {
    bg: red[100],
    text: red[600],
  },
  brown: {
    bg: brown[100],
    text: brown[600],
  },
  purple: {
    bg: purple[100],
    text: purple[600],
  },
  yellow: {
    bg: yellow[100],
    text: yellow[900],
  },
  green: {
    bg: lightGreen[100],
    text: lightGreen[600],
  },
  blue: {
    bg: blue[100],
    text: blue[600],
  },
  orange: {
    bg: orange[100],
    text: orange[600],
  },
  default: {
    bg: grey[100],
    text: grey[600],
  },
  gray: {
    bg: green[100],
    text: green[600],
  },
  pink: {
    bg: pink[100],
    text: pink[600],
  },
};

function DChip({ selected, color, size, label, clickable, parentFunction }: CustomChip) {
  const handleClick = (): void => {
    if (parentFunction) {
      parentFunction(label);
    }
  };

  let icon;

  if (selected) {
    icon = <CheckIcon />;
  }
  let notionColor = { bg: 'default', text: 'grey' };
  if (notionSelect[color]) {
    notionColor = notionSelect[color];
  }

  const customTheme = createTheme({
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: selected ? notionColor.bg : 'default',
            color: selected ? notionColor.text : 'grey',
            borderColor: selected ? notionColor.bg : 'grey',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Chip
        sx={{ borderRadius: 1 }}
        label={<div className='dChip__label'> {label}</div>}
        size={size}
        variant='outlined'
        icon={icon}
        clickable={clickable}
        onClick={handleClick}
      />
    </ThemeProvider>
  );
}

export default DChip;
