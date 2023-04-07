let students = [
  { name: "Sonia", birth: "14 mai 2019" },
  { name: "Antoine", birth: "12 mai 2000" },
  { name: "Alice", birth: "14 septembre 1990" },
  { name: "Sophie", birth: "2 octobre 2001" },
  { name: "Bernard", birth: "21 août 1980" },
];

function addStudent(name, birth) {
  students.push({ name, birth });
}

function removeStudent(name) {
  students = students.filter((student) => student.name !== name);
}

function getStudents() {
  return students;
}

export { addStudent, removeStudent, getStudents };
