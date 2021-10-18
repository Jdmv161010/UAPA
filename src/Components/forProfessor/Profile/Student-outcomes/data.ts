export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
export const colourOptions: readonly ColourOption[] = [
    { value: 'juanito', label: 'juan', color: '#00B8D9', isFixed: true },
    { value: 'jose', label: 'jose', color: '#0052CC', isDisabled: false },
    { value: 'pipe', label: 'pipe', color: '#5243AA', isFixed: true },
    
  ];
  
  
  
  