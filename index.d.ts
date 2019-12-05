import { Component } from 'react';

interface ConfirmInputProps {
  value?: string
  isChecked?: boolean
  placeholder?: string
  onChange?: (value:string) => void
  onSubmit?: (checked:boolean) => void
}

declare class ConfirmInput extends Component<ConfirmInputProps> {}

export = ConfirmInput;