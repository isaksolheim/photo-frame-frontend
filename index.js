function handleChange(evt) {
  const input = document.getElementById('img-upload');
  const reader = new FileReader();

  reader.readAsDataURL(input.files[0]);
  reader.onloadend = function() {
    var base64data = reader.result;
    if (typeof base64data === 'string') {
      postImage(base64data);
    }
  };
}

function postImage(img) {
  fetch('http://localhost:3001/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: img })
  })
    .then(res => {
      console.log(res.status);
      document.getElementById('output').innerHTML = res.status;
    })
    .catch(error => console.log(error));
}
