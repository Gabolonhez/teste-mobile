export interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
}

export interface ButtonLogicProps {
  onPress?: () => void;
  disabled: boolean;
  loading: boolean;
}
