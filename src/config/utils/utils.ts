import {format} from 'date-fns';
import AppStorage from '../services/AppStorage';
export default class Utility {
  constructor() {}

  static stripNumber = (phoneNumber: string) => {
    let newVal = phoneNumber;
    if (phoneNumber?.includes('+234')) {
      const temp = phoneNumber?.split('+234');
      newVal = `0${temp[1]}`;
    }
    if (phoneNumber?.includes('234')) {
      const temp = phoneNumber?.split('234');
      newVal = `0${temp[1]}`;
    }
    return newVal;
  };


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

  static inputWithComma(value: string) {
    if (!value) {
      return '0';
    }
    var number = value.replace(/,/g, '');
    if (isNaN(number)) {
      return 'NaN';
    }
    let formattedNumber = Number(number).toLocaleString('en-GB');
    return formattedNumber;
  }

  static upperCaseFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // static FormatDaysAgo(datetime) {
  //   if (datetime != null) {
  //     let dateAdjusted = datetime.replace(' ', 'T');
  //     let theDate = new Date(dateAdjusted);
  //     return Moment(theDate, 'YYYYMMDD').fromNow();
  //   }
  //   return datetime;
  // }

  // static FormatDate(dateTime) {
  //   if (dateTime != null) {
  //     let theDate = Moment(new Date(dateTime));
  //     return theDate.format('Do MMM Y');
  //   }
  //   return dateTime;
  // }

  static formatDate(dateTime: string) {
    if (dateTime != null) {
      return format(new Date(dateTime), "d MMM Y hh:mm:aaaaa'm'");
    }
    return dateTime;
  }

