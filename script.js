$(document).ready(() => {
    let pendingtasks = $('#pending-tasks-tasks')
    let completedtasks = $('#completed-tasks-tasks')
    let taskName = $('#taskName')
    let priorityLevel = $('#priorityLevel')

    $("#saveButton").click(() => {

        // Creating the container for the task item div
        let taskItemDiv = $('<div class="task-item">')

        // Saving the title and priority values
        let taskTitle = '<span class="task-text">' + taskName.val() + '</span>'
        taskName.val('')
        console.log(taskName.val())
        let priorityTitle = '<span class="task-text">' + priorityLevel.val() + '</span>'
        priorityLevel.val('')
        console.log(priorityLevel.val())

        // Placing the values into containers

        // name of task
        let taskItemDivTitle = $('<div class="task-titles">')
        taskItemDivTitle.html(taskTitle)
        console.log(taskItemDivTitle.html())
        // priority level
        let taskItemDivPriority = $('<div class="task-priorities">')
        taskItemDivPriority.html(priorityTitle)
        console.log(taskItemDivPriority.html())
        // checkbox and remove button
        let rbutton = $('<button class="removeButton">Remove</button>')
        let cbox = $('<input class="checkedBox" type="checkbox" />')
        
        // Placing value into task container
        taskItemDiv.append(taskItemDivTitle.html()).append(taskItemDivPriority.html()).append(rbutton).prepend(cbox)
        console.log(taskItemDiv.text())
        // Placing into the main pending div
        pendingtasks.append(taskItemDiv)

        // adding functionality to remove task
        rbutton.click(() => {
            $(taskItemDiv).remove();
        })

        // adding functionality to change divs
        cbox.change(function() {
            if(this.checked) {
                completedtasks.append(taskItemDiv)
            } else {
                pendingtasks.append(taskItemDiv)
            }
        })
    })
})