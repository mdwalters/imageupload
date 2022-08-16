function upload() {

  let img = document.getElementById('image').files[0];

  let reader = new FileReader();
    
  reader.addEventListener("load", function () {
    document.getElementsByTagName('img')[0].src = reader.result;
    var key = document.getElementById("key").value;
    
    let data = new FormData();
    data.append('key', key);
    data.append('image', img);

    $.ajax({
      url: "https://api.imgbb.com/1/upload",
      type: "POST",
      processData: false,
      contentType: false,
      data: data,
      success: showMe,
      error: error,
    });
  }, false);

  reader.readAsDataURL(img);

}

function error(data) {
  alert('Error! Images must be JPG, PNG, BMP, GIF, TIF, WEBP or HEIC. 32 MB max.');
}

function showMe(data) {
  var id = data['data']['id'];
  var file = data['data']['image']['filename'];
  document.getElementById('bbcode').textContent = `https://i.ibb.co/${id}/${title}`;
}
