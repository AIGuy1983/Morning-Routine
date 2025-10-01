const tasks = [
    "🦷 Brush Teeth",
    "💇‍♀️ Brush Hair",
    "👕 Get Dressed",
    "🍳 Eat Breakfast",
    "🎒 Pack School Bag",
    "🤝 Be Kind / No Arguing"
];

let currentProfile = "";
let points = 0;

function selectProfile(name) {
    currentProfile = name;
    document.getElementById('child-name').textContent = name + "'s Morning Routine";
    document.getElementById('profile-selection').style.display = 'none';
    document.getElementById('routine-container').style.display = 'block';
    loadTasks();
}

function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'task-' + index;
        checkbox.addEventListener('change', updatePoints);
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(' ' + task));
        taskList.appendChild(li);
    });
}

function updatePoints() {
    points = document.querySelectorAll('#task-list input:checked').length;
    document.getElementById('points').textContent = points;
    document.getElementById('progress-fill').style.width = (points / tasks.length * 100) + '%';
}
