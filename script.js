const students = [
  {
    id: "TN001",
    fullName: "Maria Nguyễn An",
    birthYear: 2014,
    className: "Thiếu 1",
    branch: "Thiếu Nhi",
    isPresent: true
  },
  {
    id: "TN002",
    fullName: "Phêrô Trần Bình",
    birthYear: 2013,
    className: "Thiếu 2",
    branch: "Thiếu Nhi",
    isPresent: false
  },
  {
    id: "TN003",
    fullName: "Anna Lê Chi",
    birthYear: 2015,
    className: "Ấu 3",
    branch: "Ấu Nhi",
    isPresent: true
  },
  {
    id: "TN004",
    fullName: "Gioan Phạm Dũng",
    birthYear: 2012,
    className: "Nghĩa 1",
    branch: "Sống Đạo",
    isPresent: false
  }
];

const studentList =
  document.getElementById("student-list");

const studentForm =
  document.getElementById("student-form");

const studentIdInput =
  document.getElementById("student-id");

const studentNameInput =
  document.getElementById("student-name");

const studentBirthYearInput =
  document.getElementById("student-birth-year");

const studentClassInput =
  document.getElementById("student-class");

const studentBranchInput =
  document.getElementById("student-branch");

const studentStatusInput =
  document.getElementById("student-status");

const studentMessage =
  document.getElementById("student-message");

function renderStudents() {
  let tableRows = "";

  for (
    let index = 0;
    index < students.length;
    index = index + 1
  ) {
    const currentStudent = students[index];

    let attendanceStatus;
    let attendanceClass;

    if (currentStudent.isPresent === true) {
      attendanceStatus = "Có mặt";
      attendanceClass = "present";
    } else {
      attendanceStatus = "Vắng mặt";
      attendanceClass = "absent";
    }

    tableRows =
      tableRows +
      "<tr>" +
        "<td>" + (index + 1) + "</td>" +
        "<td>" + currentStudent.id + "</td>" +
        "<td>" + currentStudent.fullName + "</td>" +
        "<td>" + currentStudent.birthYear + "</td>" +
        "<td>" + currentStudent.className + "</td>" +
        "<td>" + currentStudent.branch + "</td>" +
        "<td>" +
          "<button class='attendance-button " +
            attendanceClass +
          "'>" +
            attendanceStatus +
          "</button>" +
        "</td>" +
      "</tr>";
  }

  studentList.innerHTML = tableRows;

  addAttendanceEvents();
}

function addAttendanceEvents() {
  const attendanceButtons =
    document.querySelectorAll(".attendance-button");

  for (
    let index = 0;
    index < attendanceButtons.length;
    index = index + 1
  ) {
    const currentButton = attendanceButtons[index];

    currentButton.addEventListener(
      "click",
      function () {
        toggleAttendance(index);
      }
    );
  }
}

function toggleAttendance(index) {
  const selectedStudent = students[index];

  if (selectedStudent.isPresent === true) {
    selectedStudent.isPresent = false;
  } else {
    selectedStudent.isPresent = true;
  }

  renderStudents();
}

renderStudents();
function handleAddStudent(event) {
  event.preventDefault();

  const studentId =
    studentIdInput.value.trim();

  const fullName =
    studentNameInput.value.trim();

  const birthYear =
    Number(studentBirthYearInput.value);

  const className =
    studentClassInput.value.trim();

  const branch =
    studentBranchInput.value;

  const isPresent =
    studentStatusInput.value === "true";

  if (
    studentId === "" ||
    fullName === "" ||
    className === "" ||
    branch === ""
  ) {
    studentMessage.textContent =
      "Vui lòng nhập đầy đủ thông tin.";

    return;
  }

  for (
    let index = 0;
    index < students.length;
    index = index + 1
  ) {
    if (students[index].id === studentId) {
      studentMessage.textContent =
        "Mã thiếu nhi đã tồn tại.";

      return;
    }
  }

  const newStudent = {
    id: studentId,
    fullName: fullName,
    birthYear: birthYear,
    className: className,
    branch: branch,
    isPresent: isPresent
  };

  students.push(newStudent);

  renderStudents();

  studentMessage.textContent =
      "Đã thêm " + newStudent.fullName + ".";

  studentForm.reset();
}

studentForm.addEventListener(
  "submit",
  handleAddStudent
);

