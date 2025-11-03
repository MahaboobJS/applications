import { Theme } from './theme';

export const colors: Theme & {
  graphs: {
    background: string;
    line: {
      line1: string;
      line2: string;
      line3: string;
    };
  };
} = {
  text: {
    default: 'rgba(0, 0, 0, 0.9)',
    muted: '#888888',
    interactive: {
      default: '#FFFFFF',
      hover: '#4A67FB',
      pressed: '',
    },
    status: {
      neutral: '#5D5D5D',
      success: '#2C6935',
      warning: '#8F4C0F',
      critical: '#A8361C',
    },
  },

  surface: {
    default: 'rgba(83, 88, 127, 0.08)',
    background: '#fafafa',
    backdrop: '#fafafa',
    muted: '#FFFFFF',
    interactive: {
      default: '#4A67FB',
      hover: '#BFBFBF',
      pressed: 'rgba(74, 103, 251, 0.08)',
    },
    status: {
      neutral: '#BFBFBF',
      neutralMuted: 'rgba(102, 102, 102, 0.1)',
      success: '#9FE2AC',
      successMuted: 'rgba(57, 162, 99, 0.1)',
      warning: '#FFDC7F',
      warningMuted: 'rgba(255, 187, 0, 0.12)',
      critical: '#F8AAB9',
      criticalMuted: 'rgba(223, 64, 55, 0.08)',
    },
  },

  border: {
    default: '#D9D9D9',
    interactive: {
      default: '',
      hover: '#D9D9D9',
    },
    status: {
      neutral: '#8EBBEF',
      success: '',
      warning: '',
      critical: 'rgba(223, 64, 55, 0.08)',
    },
  },
  graphs: {
    background: '#262626',
    line: {
      line1: '#4078F0',
      line2: '#DF4037',
      line3: '#02B268',
    },
  },
};
