function upload() {

  let img = document.getElementById('image').files[0];

  let reader = new FileReader();
    
  reader.addEventListener("load", function () {
    document.getElementsByTagName('img')[0].src = reader.result;

    let data = new FormData();
    data.append('key', '71260637fa6e63bff7f0bb6c6279ca4b');
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
  alert('Error! Images must be JPG, PNG, BMP, GIF, TIF, WEBP or HEIC. 32 MB max.' + data);
}

function showMe(data) {
  let url = data['data']['url'];
  document.getElementById('bbcode').textContent = url;
}
