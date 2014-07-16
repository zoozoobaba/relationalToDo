
$(document).ready(function(){
  var currentList;
  $("form#lists").submit(function(event) {
    event.preventDefault();

    // var list = {};
    // var task = []
    var listName = $("input#new-list").val();

    var list = {name: listName, tasks: []}

    // list[userList] = [];
    console.log(list)

    if (listName) {
      $("ul.current-List").append("<li class='test'>" + list.name + "</li>");
      $("ul.current-List").show();
      $("input#new-list").val("");
      $("li.test").last().click(function() {
        $(".list-name").text(list.name);
        $(".list-name").show();
        $("#second-form").show();
        console.log(list);
        currentList = list
      });
    };

    var taskList = $("input#task-list").val();

    if (taskList) {
      console.log("Hi")
      task.push($("input#new-task").val());
      console.log(task);
    };


  });

  $("form#tasks").submit(function(event) {
    event.preventDefault();
    var userTask = $("input#new-task").val();
    var task = {description: userTask}
    $("input#new-task").val("");
    if(userTask){
      currentList.tasks.push(task);

    };
  });
});
