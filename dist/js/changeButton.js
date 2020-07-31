export function changeButton(path) {
  let page = path.substring(path.lastIndexOf("/") + 1);
  $('nav a').removeClass('hiddenFromPage');
  $('[href="' + page + '"]').addClass('hiddenFromPage');
}