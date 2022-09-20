export class Job {
  arrJob = [];
  arrJonCompleted = [];
  addJob = (newJob) => {
    this.arrJob.push(newJob);
    document.querySelector("#todo").innerHTML = newJob;
    this.renderTableJob();
  };
  saveJobs() {
    localStorage.setItem("arrJob", JSON.stringify(this.arrJob));
  }
  layJob() {
    if (localStorage.getItem("arrJob")) {
      this.arrJob = JSON.parse(localStorage.getItem("arrJob"));
    }
  }

  deleteItem = (idClick) => {
    this.arrJob = this.arrJob.filter((index) => index !== idClick);
  };
  comPleteItem = (idClick) => {
    let foundIdx = this.arrJob.findIndex((item) => item === idClick);
    console.log(this.arrJob[foundIdx]);
    if (foundIdx > -1) {
      this.arrJonCompleted.push(this.arrJob[foundIdx]);
      this.arrJob.splice(foundIdx, 1);
      this.renderTableJob();
    }
    const html = "";
    let htmlCompleted = this.arrJonCompleted.map((item, index) => {
      return (
        html +
        `
        <li>
        ${item}
        <div>
        <button onclick="deleteJob('${item}')">
        <i class="fa fa-trash"></i></button>
        <button style="background-color:springgreen" onclick="comPleteJob('${item}')">
        <i class="fa fa-check-circle""></i></button>
        </div>
        </li>
        `
      );
    });
    document.querySelector("#completed").innerHTML = htmlCompleted;
  };
  sapXepAZ = () => {
    const resultOderByName = this.arrJob.sort();

    console.log(resultOderByName, "sắp xếp theo tên ");
  };
  sapXepZA = () => {
    const resultOderByNameZA = this.arrJob.reverse();
  };

  renderTableJob = () => {
    const html = "";
    console.log(this.arrJob);
    let htmlContent = this.arrJob.map((item, index) => {
      return (
        html +
        `
        <li>
        ${item}
        <div>
        <button onclick="deleteJob('${item}')">
        <i class="fa fa-trash"></i></button>
        <button onclick="comPleteJob('${item}')">
        <i class="fa fa-check-circle"></i></button>
        </div>
        </li>
      
        `
      );
    });
    // console.log(htmlContent);
    document.querySelector("#todo").innerHTML = htmlContent;
  };
}
