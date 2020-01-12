# This is the package to get the full last login
for eg: 5 minutes ago

How to use:

const { getLastActive } = require('getlastactive');

getLastActive(1578073312473,1578073312473); 
// (t1, t2) t2 is current date and t1 is prevous date
//Results looks like : 5 months 6 days 5 hours 6 minutes 

getLastActive(1578073312473);
// (t1, t2) t2 is current date(Date.now()) and t1 is prevous date
Results looks like : 6 minutes 