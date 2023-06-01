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

  // static formatNumber(
  //   numb: number,
  //   fixed: number = 0,
  //   withSymbol: boolean = true,
  // ) {
  //   var decimalPart;
  //   let num = Number(numb);

  //   var array = Math.ceil(num).toString().split('');
  //   var index = -3;
  //   while (array.length + index > 0) {
  //     array.splice(index, 0, ',');
  //     index -= 4;
  //   }

  //   if (fixed > 0) {
  //     decimalPart = num.toFixed(fixed).split('.')[1];
  //     return array.join('') + '.' + decimalPart;
  //   }
  //   if (withSymbol) {
  //     return '₦' + array.join('');
  //   }
  //   return array.join('');
  // }

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

  static sessionManager = async () => {
    const data = {} as {code: number; route: string; message: string};
    const now = new Date();
    const sessionTime = await AppStorage.getData('expireAt');
    const token = await AppStorage.getData('token');

    let timeNow = now.getTime();

    if (timeNow > sessionTime || token === null) {
      await AppStorage.deleteData('token');
      await AppStorage.deleteData('expireAt');
      if (sessionTime) {
        data.code = 1;
        data.route = 'AuthStack';
        data.message = 'Your session expired!';
        return data;
      } else {
        data.code = 2;
        data.route = 'OnBoard';
        data.message = 'Session expired!';
        return data;
      }
    } else {
      data.code = 3;
      data.route = 'DashboardTab';
      return data;
    }
  };
}
