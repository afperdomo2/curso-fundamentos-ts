import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);

// Le resta 2 días a 'date'
const rest = subDays(date, 2);

console.log('date:', format(date, 'dd-MM-YYY'));
console.log('rest:', format(rest, 'dd-MM-YYY'));
