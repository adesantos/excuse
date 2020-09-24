import "../style/index.scss";

window.onload = function() {
  var ar_who = ["The dog", "My grandma", "His turtle", "My bird"];
  var ar_action = ["ate", "peed", "crushed", "broke"];
  var ar_what = ["my homework", "the keys", "the car"];
  let ar_when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var excuse = document.querySelector("#excuse");
  var who;
  var action;
  var what;
  var when;

  who = ar_who[Math.floor(Math.random() * ar_who.length)];
  what = ar_what[Math.floor(Math.random() * ar_what.length)];
  when = ar_when[Math.floor(Math.random() * ar_when.length)];
  action = ar_action[Math.floor(Math.random() * ar_action.length)];

  excuse.innerHTML = who + " " + action + " " + what + " " + when;
};
