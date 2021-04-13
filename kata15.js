const organizeInstructors = function (instructors) {
  const object = {};
  const course = [instructors[0].course];
  object[course] = [instructors[0].name];
  for (let i = 1; i < instructors.length; i++) {
    let count = 0;
    const numOfCourse = course.length;
    for (let j = 0; j < numOfCourse; j++) {
      if (course[j] === instructors[i].course) {
        object[course[j]].push(instructors[i].name);
      } else {
        count++;
      }
      if (count === course.length) {
        course.push(instructors[i].course);
        object[instructors[i].course] = [instructors[i].name];
      }
    }
  }

  return object;
};

console.log(
  organizeInstructors([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Victoria', course: 'Web' },
    { name: 'Karim', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  organizeInstructors([
    { name: 'Brendan', course: 'Blockchain' },
    { name: 'David', course: 'Web' },
    { name: 'Martha', course: 'iOS' },
    { name: 'Carlos', course: 'Web' },
  ])
);
