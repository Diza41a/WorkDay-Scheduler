var tasks;

$(document).ready(function(){
    //header current time
    setInterval(function(){
    var headerTime = moment().format("L LTS");
    $("#date-time-header").text(headerTime);
    },1000);
    //fill contents
    for (var hourCount = 0; hourCount < 8; hourCount++)
    {
        var row = $("<div>")
        .addClass("row");
        

        var timeContainer = $("<div>")
        .addClass("col-12");
        var time = $("<p>")
        .text(9 + hourCount + ":00")
        .attr("text-align","center");
        timeContainer.append(time);

        var taskContainer = $("<div>")
        .addClass("col-11");
        var task = $("<p>")
        .addClass("task-container")
        .addClass("task-"+(9 + hourCount))
        .text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore vel odit cumque autem temporibus " + 
        "reiciendis, reprehenderit a libero tempora quod nemo repellat voluptatem quae, dolores optio. Mollitia incidunt ullam quas?")
        taskContainer.append(task);

        var btnContainer = $("<div>")
        .addClass("col-1");
        var btnDelete = $("<button>")
        .addClass("text-light")
        .addClass("bg-danger")
        .attr("text-align","center")
        .text("Delete");
        btnContainer.append(btnDelete);

        row.append(timeContainer, taskContainer, btnContainer);
        $(".container").append(row);
        
        loadTasks();
    }
});

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    var dateStr = moment().format("L");
    if (!tasks || tasks.date !== moment().format("L"))
    {
          tasks = {date: dateStr, 9: "Add your task", 10: "Add your task", 11: "Add your task", 12: "Add your task",
          13: "Add your task", 14: "Add your task", 15: "Add your task", 16: "Add your task", 17: "Add your task"};
          saveTasks();
    }
    var dayCount = 9;
    $(".task-container").each(function(){
        if($(this).hasClass("task-"+dayCount))
        {
            var text = tasks.dayCount;
            $(this).text(text);
        }
    });
}

var saveTasks = function(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}