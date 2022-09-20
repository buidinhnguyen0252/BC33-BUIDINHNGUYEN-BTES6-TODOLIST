import { Job } from "../models/job.js";

let job = new Job();

//Thêm việc
document.querySelector("#addItem").onclick = function () {
  let inputJob = document.querySelector("#newTask");
  console.log(inputJob.value);

  job.addJob(inputJob.value);
  job.saveJobs();
};
//Sắp xếp A-->Z
document.querySelector("#three").onclick = function () {
  job.sapXepAZ();
  job.renderTableJob();
  job.saveJobs();
};
//Sắp xếp Z--> A
document.querySelector("#two").onclick = function () {
  job.sapXepAZ();
  job.sapXepZA();
  job.renderTableJob();
  job.saveJobs();
};

//Đánh dấu việc cần làm
window.comPleteJob = (idClick) => {
  console.log(idClick);
  job.comPleteItem(idClick);
};

// Xóa việc cần làm
window.deleteJob = (jobClick) => {
  job.deleteItem(jobClick);
  job.renderTableJob();
  job.saveJobs();
};

//Lấy dữ liệu store ra table
window.onload = function () {
  job.layJob();
  job.renderTableJob("card__todo");
};
