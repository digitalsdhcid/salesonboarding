function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YOK9zdB7VE":
        Script1();
        break;
      case "6EdzjI7Jx9K":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

function findLMSAPI(win) {
  if (win.hasOwnProperty("GetStudentID")) return win;

  else if (win.parent == win) return null;

  else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[0]; // you can also try array[1]
player.SetVar("nameL", newName);
}

function Script2()
{
  var player = GetPlayer();

function findLMSAPI(win) {
  if (win.hasOwnProperty("GetStudentID")) return win;

  else if (win.parent == win) return null;

  else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[1]; // you can also try array[1]
player.SetVar("nameF", newName);
}

