

window.onload = function() {
  displayStores();
}


function initMap() {
    var losAngeles = { 
        lat: 34.063380, 
        lng: -118.358080 
    };
    map = new google.maps.Map(document.getElementById("map"), {
      center: losAngeles,
      zoom: 11,
      mapTypeId: "roadmap",
    });
  }

function displayStores() {
  var storesHtml ='';
  for(var [index, store] of stores.entries()){
    var address = store['addressLines'];
    var phone = store['phoneNumber'];
    storesHtml += `
            <div class="store-container">
              <div class="store-info-container">
                <div class="store-address">
                  <span>${address[0]}</span>
                  <span>${address[1]}</span>
                </div>
                <div class="store-phone-number">${phone}</div>
              </div>
              <div class="store-number-container">
                <div class="store-number">
                  ${index+1}
                </div>
              </div>
            </div>
    `
    document.querySelector('.stores-list').innerHTML = storesHtml;
    
  }
}