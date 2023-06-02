export default class Utility {
  constructor() {}

  static formatAmount = (
    num: number,
    withDecimal: boolean = true,
    decimalPlace: number = 2,
    hide: boolean = false,
  ) => {
    if (hide) {
      return '--,---';
    }

    let newValue = null;
    if (withDecimal) {
      newValue = num.toLocaleString('en-US', {
        minimumFractionDigits: decimalPlace,
        maximumFractionDigits: decimalPlace,
      });
    } else {
      newValue = num.toLocaleString('en-US');
    }
    return `₦${newValue}`;
  };


  static upperCaseFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
