const rows = document.querySelectorAll("#gradeTable tbody tr");

function toScore(value) {
  const num = Number(value);
  return isNaN(num) || value === "" ? 0 : num;
}

function getGrade(total) {
  if (total >= 70) {
    return "A";
  } else if (total >= 60) {
    return "B";
  } else if (total >= 50) {
    return "C";
  } else if (total >= 40) {
    return "D";
  } else {
    return "F";
  }
}

function calculateRow(row) {
  const ca1 = toScore(row.querySelector(".ca1").value);
  const ca2 = toScore(row.querySelector(".ca2").value);
  const ca3 = toScore(row.querySelector(".ca3").value);
  const exam = toScore(row.querySelector(".exam").value);

  const total = ca1 + ca2 + ca3 + exam;
  const grade = getGrade(total);

  const totalCell = row.querySelector(".total");
  const gradeCell = row.querySelector(".grade");

  totalCell.textContent = total;
  gradeCell.textContent = grade;

  gradeCell.className = "grade grade-" + grade;
}

rows.forEach(function (row) {
  const inputs = row.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      calculateRow(row);
    });
  });
});
