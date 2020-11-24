// Adding a Document Object Model content loader with add event listener
window.addEventListener("DOMContentLoaded", (event) => {
  /// Calling the inner HTML method to initialise a header template and then bind it with the table
  createInnerHtml();
});
/// UC4 -- Using the template literal feature of ES6
const createInnerHtml = () => {
  const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
  const innerHTML = `${headerHtml}
  <tr>
    <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png"></td>
    <td>Praveen</td>
    <td>Male</td>
    <td><div class='dept-label'>Finance</div>
        <div class="dept-label">Engineer</div>
    </td>
    <td>477600</td>
    <td>14 November 2020</td>
    <td><img id="1" onclick= "remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
      <img id="1" onclick= "update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg"></td>
  </tr>`;
  /// Manipulating the inner Html content of the table display with the assigned value
  /// Still the page is static and has to be made dynamic in subsequent stages
  document.querySelector("#table-display").innerHTML = innerHTML;
};
