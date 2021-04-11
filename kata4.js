const instructorWithLongestName = function (instructors) {
  // set the max variable as a minimum number(name cannot be 0 length)
  let max = 0;
  // set the index of instructors object as 0
  let index = 0;
  for (let i = 0; i < instructors.length; i++) {
    // if the length of name is longer than max
    if (instructors[i].name.length > max) {
      max = instructors[i].name.length;
      index = i;
    }
  }
  return instructors[index];
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ])
);
