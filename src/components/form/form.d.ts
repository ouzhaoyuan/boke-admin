declare namespace Form {
  type DisplayConditionFunction = (formValues: any) => boolean;
  type DisplayCondition =
    | DisplayConditionFunction
    | {
        prop: string;
        displayValue: any;
      };
  interface BaseField {
    name?: string;
    prop: string;
    label?: string;
    placeholder?: string;
    span?: string | number;
    rules?: Rule[];
    displayCondition?: DisplayCondition;
  }

  type OptionsRequest = () => Promise<Option[]>;
  interface OptionField extends BaseField {
    options?: Option[] | OptionsRequest;
  }
  interface Option {
    value: string | number | boolean;
    label: string;
    [key: string]: any;
  }
  type Options = Option[];

  interface InputField extends BaseField {
    type: "Input";
  }
  interface TextareaField extends BaseField {
    type: "Textarea";
    autoSize?: boolean | { minRows: number; maxRows: number };
  }

  interface SelectField extends OptionField {
    type: "Select";
  }

  interface FlexibleDatePickerField extends BaseField {
    type: "FlexibleDatePicker";
  }

  interface ButtonRadioField extends OptionField {
    type: "ButtonRadio";
  }

  interface RadioField extends OptionField {
    type: "Radio";
  }

  interface FormItemProps {
    value: any;
    onChange: (value: any) => void;
  }

  type Field =
    | InputField
    | SelectField
    // | FlexibleDatePickerField
    // | ButtonRadioField
    | RadioField
    | TextareaField;
  type Fields = Field[];
}
