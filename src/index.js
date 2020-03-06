module.exports = function reverse (n) {
  let m = [];
  let s;
  let res = 0;

  if (n < 0) { a = false; }

  m = String(n).split('');
  m.reverse();
  s = m.join('');

  res = parseInt(s);

//  console.log('IN = ', n, 'RESULT = ', res);
  return res;

}
