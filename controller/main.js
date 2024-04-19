// Functions Chung
function getValue(query) {
    return document.querySelector(query).value;
 }
 
 function setValue(query, newValue) {
    return document.querySelector(query).value = newValue;
 }
 
 function hienThi(mang) {
    let content = "";
    mang.map(function (item) {
        content += `
            <div class="grid-item">
                <div class="card" style="width: 18rem;">
                    <img src="https://shop.cyberlearn.vn/images/${item.image}" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">${item.name.toUpperCase()}</h5>
                        <p class="card-text">${item.shortDescription.charAt(0).toUpperCase() + item.shortDescription.slice(1)}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="sneakerbtn-yellow">Buy now</button>
                            <div class="price-circle" style="margin-right: 20px;">$${item.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    document.querySelector("#shoeItem").innerHTML = content;
 }
 


function getCurrentPageNumber() {
    const activeButton = document.querySelector("#pagination .page-btn.active"); // Assuming active button has `active` class
    // or
    // const activeButton = document.querySelector("#pagination .page-btn[data-page='active'"); // Assuming active button has `data-page="active"` attribute

    if (activeButton) {
        return parseInt(activeButton.textContent, 10); // Extract page number from button text and convert to integer
    } else {
        console.warn("Could not find active page button");
        return null; // Or return a default value if no active button found
    }
}

function layDanhSachShoe(pageNumber) {
    let objPromise = axios({
      method: 'get',
      url: `https://shop.cyberlearn.vn/api/Product/getpaging?pageIndex=${pageNumber}&pageSize=9`
    });
  
    objPromise.then(function (result) {
      console.log(result);
      console.log(result.data.content.items);
      hienThi(result.data.content.items);
    }).catch(function (error) {
      console.log(error);
    });
  }
  
  // pagination
  // Get the container element
  var btnContainer = document.getElementById("pagination");
  
  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("page-btn");
  
  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      // Remove active class from previous button
      var current = document.getElementsByClassName("page-btn active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add active class to clicked button
      this.className += " active";
  
      // Extract page number from button text (assuming it's the page number)
      let currentPage = parseInt(this.textContent, 10);
  
      // Call layDanhSachShoe with the new current page number
      layDanhSachShoe(currentPage);
  
      console.log("Current page number:", currentPage);
    });
  }
  
  // Initial load (optional)
  let currentPage = getCurrentPageNumber(); // Load current page number (if needed)
  layDanhSachShoe(currentPage); 

