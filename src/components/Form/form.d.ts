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
    size?: string;
    displayCondition?: DisplayCondition;
    getValueFromEvent?: (...args: any[]) => string;
    render?: (value) => JSX.Element | Element;
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

  interface DatePickerField extends BaseField {
    type: "DatePicker";
  }

  interface UploadField extends BaseField {
    type: "Upload";
    action: string;
    showUploadList?: boolean;
    headers?: any;
    fileList?: [];
    listType?: string;
    onChange: (res: any) => void;
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
    | DatePickerField
    | TextareaField
    | UploadField;
  type Fields = Field[];
}
