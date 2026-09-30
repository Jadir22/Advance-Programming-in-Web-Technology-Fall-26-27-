const studentName = "Junayed";

console.log("Student Name:", studentName);

let marks = [70, 80, 38, 90, 45];
marks.push(75);
console.log("Marks:", marks);


function calculateTotal(marks) {
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }
  return total;
}

console.log("Total Marks:", calculateTotal(marks));


function calculateAverage(marks) {
  let total = calculateTotal(marks);

  let average = total / marks.length;

  return average;
}

console.log("Average Marks:", calculateAverage(marks));


function calculateGrade(marks) {
  let average = calculateAverage(marks);

  if (average >= 80) {
    return "A+";
  }
  else if (average >= 70) {
    return "A";
  }
  else if (average >= 60) {
    return "B";
  }
  else if (average >= 50) {
    return "C";
  }
  else {
    return "F";
  }
}

console.log("Grade:", calculateGrade(marks));


function findHighestMark(marks) {
  let highest = marks[0];

  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }
  return highest;
}

console.log("Highest Mark:", findHighestMark(marks));


function countPassedSubjects(marks) {
  let count = 0;

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      count++;
    }
  }
  return count;
}

console.log("Passed Subjects:", countPassedSubjects(marks));