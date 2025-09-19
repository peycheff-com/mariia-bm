declare global {
  function gtag(command: 'config' | 'event' | 'set', targetId: string, parameters?: any): void;
}

export {};