function upload() {

  let img = document.getElementById('image').files[0];

  let reader = new FileReader();
    
  reader.addEventListener("load", function () {
    document.getElementsByTagName('img')[0].src = reader.result;

    let data = new FormData();
    data.append('key', 'ac0903c5eb58adac4c2edc31e5d06093');
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
  let url = data['data']['url'];
  //url = url.replace('https://i.ibb.co/', '');
  //url = url.replace('/' + data['data']['image']['filename'], '');
  //url = '[img]https://secure.wikimedia.org/wikipedia/i.ibb.co%5C/..%5C' + url + '%5C/..%5C' + data['data']['image']['filename'] + '[/img]';
  document.getElementById('bbcode').textContent = url;
}
