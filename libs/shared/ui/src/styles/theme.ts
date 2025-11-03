// this allows for just one key to be extended
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Theme = {
  text: {
    default: string;
    muted: string;
    interactive: {
      default: string;
      hover: string;
      pressed: string;
    };
    status: {
      neutral: string;
      success: string;
      warning: string;
      critical: string;
    };
  };
  surface: {
    default: string;
    background: string;
    backdrop: string;
    muted: string;
    interactive: {
      default: string;
      hover: string;
      pressed: string;
    };
    status: {
      neutral: string;
      neutralMuted: string;
      success: string;
      successMuted: string;
      warning: string;
      warningMuted: string;
      critical: string;
      criticalMuted: string;
    };
  };
  border: {
    default: string;
    interactive: {
      default: string;
      hover: string;
    };
    status: {
      neutral: string;
      success: string;
      warning: string;
      critical: string;
    };
  };
};

export type PartialTheme = DeepPartial<Theme>;
