window.onload = function () {
    // טעינת המשימות מ-localStorage אם קיימות
    let storedTasks = JSON.parse(localStorage.getItem('tasksList'));
    if (storedTasks) {
        storedTasks.forEach(task => {
            addTaskToList(task.name, task.content);
        });
    }

    // הוספת אירוע לכפתור Add
    document.getElementById("onAdd").onclick = function() {
        // קוד להוספת המשימה לרשימה
        let taskName = document.getElementById("id_h1").value;
        let taskContent = document.getElementById("id_h2").value;
        if (taskName.trim() !== '' && taskContent.trim() !== '') {
            addTaskToList(taskName, taskContent);
            saveTasksToLocalStorage();
        } else {
            alert("Please fill in both task name and content.");
        }
    }

    // פונקציה להוספת משימה לרשימה
    function addTaskToList(taskName, taskContent) {
        // יצירת אלמנט חדש עבור המשימה
        let newTaskElement = document.createElement("div");
        newTaskElement.classList.add("task");
        newTaskElement.innerHTML = `<h3>${taskName}</h3><p>${taskContent}</p>`;

        // הוספת המשימה לרשימה
        document.getElementById("tasksList").appendChild(newTaskElement);

        // איפוס השדות לאחר הוספת המשימה
        document.getElementById("id_h1").value = "";
        document.getElementById("id_h2").value = "";
    }

    // פונקציה לשמירת המשימות ב-localStorage
    function saveTasksToLocalStorage() {
        let tasks = [];
        document.querySelectorAll('.task').forEach(taskElement => {
            let taskName = taskElement.querySelector('h3').innerText;
            let taskContent = taskElement.querySelector('p').innerText;
            tasks.push({ name: taskName, content: taskContent });
        });
        localStorage.setItem('tasksList', JSON.stringify(tasks));
    }
}
