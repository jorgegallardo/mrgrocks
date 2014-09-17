$('#home a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#le a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#es a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(function () {
    $('#home a:first').tab('show')
})