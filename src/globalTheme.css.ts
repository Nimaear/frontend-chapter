import { createGlobalTheme, createTheme } from '@vanilla-extract/css';

type Spacing = {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
};

type GlobalTheme = {
  borderRadius: string;
  boxShadow: string;
  border: string;
  spacing: Spacing;
  productCard: {
    colorDot: {
      borderRadius: string;
      spacing: string;
    };
    image: {
      aspectRatio: string;
    };
  };
};

const spacing: Spacing = {
  '1': '4px',
  '2': '8px',
  '3': '16px',
  '4': '24px',
  '5': '32px',
  '6': '64px',
  '7': '128px',
  '8': '256px',
};

const globalTheme: GlobalTheme = {
  borderRadius: '0px',
  boxShadow: 'none',
  border: 'solid 1px #ccc',
  spacing,
  productCard: {
    colorDot: {
      borderRadius: '0',
      spacing: spacing['1'],
    },
    image: {
      aspectRatio: '1 / 1',
    },
  },
};

const comviq: GlobalTheme = {
  ...globalTheme,
  borderRadius: '8px',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
  border: 'none',
  productCard: {
    colorDot: {
      borderRadius: '50%',
      spacing: spacing['2'],
    },
    image: {
      aspectRatio: '16 / 12',
    },
  },
} as const;

export const globalVars = createGlobalTheme(':root', globalTheme);

export const comviqTheme = createTheme(globalVars, comviq);
