/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let flag = true;
  while (flag) {
    if (students?.length === 0) return 0;
    let setStudent = new Set(students);
    if (setStudent.size === 1 && students[0] !== sandwiches[0]) {
      flag = false;
      return students?.length;
    }
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      continue;
    } else {
      let firstStudent = students.shift();
      students.push(firstStudent);
      continue;
    }
  }
};
export { countStudents };
