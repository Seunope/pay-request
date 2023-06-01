import {
  Text,
  VStack,
  Select,
  CheckIcon,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import React, {forwardRef, ReactNode} from 'react';

export type InputHandle = {
  getValue: () => string | number;
};
interface Props {
  ref?: any;
  name?: string;
  label: string;
  error?: string;
  pickerData: any;
  isValid?: boolean;
  placeholder: string;
  selectedItem: string;
  children?: ReactNode;
  defaultValue?: string;
  accessibilityLabel?: string;
  shouldDefaultChange?: boolean;
  onValueChange: (text: string) => void;
  pickerRecord?: {label: string; value: string}[];
}

const PickerBar: React.FC<Props> = forwardRef((props, ref) => {
  return (
    <FormControl
      isInvalid={props.isValid}
      w={{
        base: '100%',
        xl: '85%',
      }}>
      <Text fontWeight="300">{props.label}</Text>

      <VStack>
        <Select
          // borderRadius="20"
          selectedValue={props.selectedItem}
          defaultValue={props?.defaultValue}
          minWidth="200"
          accessibilityLabel="gender"
          placeholder={props.placeholder}
          _selectedItem={{
            bg: 'blue.60',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={props.onValueChange}
          {...{ref}}
          {...{props}}
          _actionSheetBody={{
            borderRadius: 40,
            ListHeaderComponent: (
              <FormControl mb={3} borderRadius={2}>
                {props.children}
              </FormControl>
            ),
          }}>
          {/* {!shouldDefaultChange ? pickerData :
            pickerRecord?.map(item => (
              <Select.Item label={item.label} value={item.value}  />
            ))
          } */}
          {props.pickerData}
        </Select>
      </VStack>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {props.error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
});
export default PickerBar;
