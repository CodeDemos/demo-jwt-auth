/* global $*/

const STORE = {
  token: '',
  items: ''
};

$(() => {


  $('#login').on('submit', function (event) {
    event.preventDefault();
    const el = $(event.target);
    const username = el.find('[name=username]').val().trim();
    const password = el.find('[name=password]').val().trim();
    return $.ajax({
      type: 'POST',
      url: '/api/login',
      contentType: 'application/json',
      dataType: 'json',
      processData: false,
      data: JSON.stringify({ username, password })
    })
      .then(response => {
        console.log(response);
        STORE.token = response.authToken;
        getItems(STORE);
      }).catch(err => {
        console.error('ERROR:', err);
      });
  });

  function getItems(store) {
    return $.ajax({
      type: 'GET',
      url: '/api/items',
      dataType: 'json',
      headers: { 'Authorization': `Bearer ${store.token}` }
    })
      .then(response => {
        console.log(response);
        store.items = response;
        render(store);
      }).catch(err => {
        console.error('ERROR:', err);
      });
  }

  function render(store) {
    const list = store.items.reduce((accumulator, currentValue) => {
      return accumulator + '<li>' + currentValue.name + '</li>';
    }, '');
    $('.details').append(`<ul>${list}</ul>`);
  }
});
