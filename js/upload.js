const url_vars = new URLSearchParams(queryString);
if(url_vars.has('id') && url_vars.has('id')) {
  load(url_vars.get('id'), url_vars.get('file'));
}

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
  var id = data['data']['id'];
  var file = data['data']['image']['filename'];
  document.getElementById('bbcode').textContent = `https://${window.location.hostname}/?id=${id}&file=${file}`;
}

function load(id, title) {
  location.replace(`https://i.ibb.co/${id}/${title}`);
}
