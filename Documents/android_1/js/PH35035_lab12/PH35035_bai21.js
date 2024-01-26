const class1 = [
  {
    mssv: "PS0000",
    name: "Nguyen Van A",
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: "pass",
  },
  {
    mssv: "PS0001",
    name: "Nguyen Van B",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "pass",
  },
];

const class2 = [
  {
    mssv: "PS0002",
    name: "Nguyen Van C",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "failed",
  },
  {
    mssv: "PS0003",
    name: "Nguyen Van D",
    avgPoint: 10,
    avgTraningPoint: 10,
    status: "pass",
  },
  {
    mssv: "PS0004",
    name: "Nguyen Van E",
    avgPoint: 10,
    avgTraningPoint: 2,
    status: "pass",
  },
];

// Gộp danh sách sinh viên từ hai lớp
const allStudents = [...class1, ...class2];

// Lọc ra danh sách sinh viên pass và sắp xếp theo điểm số từ cao xuống thấp
const topStudentsByPoint = allStudents
  .filter((student) => student.status === "pass")
  .sort((a, b) => b.avgPoint - a.avgPoint);

// Lọc ra danh sách sinh viên pass và sắp xếp theo điểm rèn luyện từ cao xuống thấp
const topStudentsByTrainingPoint = allStudents
  .filter((student) => student.status === "pass")
  .sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

// In ra danh sách sinh viên có điểm số từ cao xuống thấp
console.log("Danh sách sinh viên có điểm số từ cao xuống thấp:");
console.log(topStudentsByPoint);

// In ra danh sách sinh viên có điểm rèn luyện từ cao xuống thấp
console.log("\nDanh sách sinh viên có điểm rèn luyện từ cao xuống thấp:");
console.log(topStudentsByTrainingPoint);

// In ra thông tin của Ong vàng (sinh viên có điểm số cao nhất)
console.log("\nThông tin của Ong vàng:");
console.log(topStudentsByPoint[0]);
