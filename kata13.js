const talkingCalendar = function (date) {
  // Your code here
  let calendar = '';
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);

  switch (month) {
    case '01':
      calendar += 'January ';
      break;
    case '02':
      calendar += 'February ';
      break;
    case '03':
      calendar += 'March ';
      break;
    case '04':
      calendar += 'April ';
      break;
    case '05':
      calendar += 'May ';
      break;
    case '06':
      calendar += 'June ';
      break;
    case '07':
      calendar += 'July ';
      break;
    case '08':
      calendar += 'August ';
      break;
    case '09':
      calendar += 'September ';
      break;
    case '10':
      calendar += 'October ';
      break;
    case '11':
      calendar += 'November ';
      break;
    case '12':
      calendar += 'December ';
      break;
  }

  if (day[1] === '1') {
    if (day[0] === '1') calendar += day + 'th, ';
    else if (day[0] !== '0') calendar += day + 'st, ';
    else calendar += day[1] + 'st, ';
  } else if (day[1] === '2') {
    if (day[0] === '1') calendar += day + 'th, ';
    else if (day[0] !== '0') calendar += day + 'nd, ';
    else calendar += day[1] + 'nd, ';
  } else if (day[1] === '3') {
    if (day[0] === '1') calendar += day + 'th, ';
    else if (day[0] !== '0') calendar += day + 'rd, ';
    else calendar += day[1] + 'rd, ';
  } else {
    if (day[0] !== '0') calendar += day + 'th, ';
    else calendar += day[1] + 'th, ';
  }

  return (calendar += year);
};

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));
