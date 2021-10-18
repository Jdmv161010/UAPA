export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
export const StuOutOptions: readonly ColourOption[] = [
    { value: '1', label: '1.Ability to communicate effectively with a range of audiences', color: '#00B8D9', isFixed: true },
    { value: '2', label: '2.Ability to communicate effectively with a range of audiences', color: '#0052CC', isDisabled: false },
    { value: '3', label: '3.Ability to communicate effectively with a range of audiences', color: '#5243AA', isFixed: true },
    
  ];
  
