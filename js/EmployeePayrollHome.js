// Adding a Document Object Model content loader with add event listener
window.addEventListener("DOMContentLoaded", (event) => {
  /// Calling the inner HTML method to initialise a header template and then bind it with the table
  createInnerHtml();
});
/// UC4 -- Using the template literal feature of ES6
const createInnerHtml = () => {
  const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`;
  let empPayrollList= createEmployeePayrollJSON();
  for(const empPayrollData of empPayrollList){
    innerHtml= `${innerHtml}
    <tr>
          <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
          <td>${empPayrollData._name}</td>
          <td>${empPayrollData._gender}</td>
          <td>${getDeptHtml(empPayrollData._department)}
          </td>
          <td>${empPayrollData._salary}</td>
          <td>${empPayrollData._startDate}</td>
          <td><img id="${empPayrollData._id}" onclick= "remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="${empPayrollData.id}" onclick= "update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg"></td>
    </tr>`;
    }
  /// Manipulating the inner Html content of the table display with the assigned value
  /// Still the page is static and has to be made dynamic in subsequent stages
  document.querySelector("#table-display").innerHTML = innerHtml;
};
// Creating a JSON Object for fetching data from the server
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
      {       
        _name: 'Praveen',
        _gender: 'male',
        _department: [
            'Finance',
            'Engineer'
        ],
        _salary: '477600',
        _startDate: '14 November 2020',
        _note: '',
        _profilePic: '../assets/profile-images/Ellipse -2.png'
      },
      {
        _name: 'Divya',
        _gender: 'female',
        _department: [
            'HR',
            'Sales'
        ],
        _salary: '422700',
        _startDate: '19 November 2019',
        _note: '',
        _profilePic: '../assets/profile-images/Ellipse -1.png'
      }
    ];
    /// Returning the employee payroll JSON list of objects to the caller
    return empPayrollListLocal;
  }
  /// Method that defines the feed of multiple department to the employee payroll home page
  const getDeptHtml= (deptList)=>
  {
      let deptHtml='';
      for(const dept of deptList)
      {
          deptHtml= `${deptHtml}<div class="dept-label">${dept}</div>`
      }
      return deptHtml;
  }