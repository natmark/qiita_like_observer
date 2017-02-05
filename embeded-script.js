const EVENT_NAME = "Your Maker event name"
const SECRET_KEY = "Your Maker chanel key"

$("button.p-button").on('click', function () {
  if($("button.p-button").first()[0].innerText == "いいね"){
    var trigger_url = "https://maker.ifttt.com/trigger/" + EVENT_NAME + "/with/key/" + SECRET_KEY;

    var user_name = $("a.u-link-unstyled:not(.TagList__label)")[0].innerText;
    var article_title = $("h1.ArticleMainHeader__title")[0].innerText;
    var page_url = window.location.href;
    var param =  "value1=" + user_name + "&value2=" + article_title + "&value3=" + page_url

    var request = new XMLHttpRequest();
    request.open("GET", trigger_url + "?" + param, true);
    request.send("");
  }
});
