console.log("=========== phone-usage ===========");

const activities = [];
let limit;
let isActivityTableExist = false;
const existedDate = [];
const overLimitDates = [];

const activityTableContainer = document.getElementById(
  "activity-table-container"
);
const tables = document.getElementById("tables");
tables.style.display = "none";
const daysTableContainer = document.getElementById("days");
const formActivity = document.getElementById("form-activity");
const formLimit = document.getElementById("form-limit");
const displayNotSetActivity = document.getElementById(
  "display-not-set-activity"
);
const showLimitElement = document.getElementById("limit-value");
const displayLimit = document.getElementById("display-limit");
displayLimit.style.display = "none";
const displayOverLimit = document.getElementById("display-over-limit");
const displayNotSetLimit = document.getElementById("display-not-set-limit");

function addActivity(event) {
  event.preventDefault();
  tables.style.display = "block";

  let date = document.getElementById("input-date").value;
  let activity = document.getElementById("input-activity").value;
  let duration = Number(document.getElementById("input-duration").value);

  if (date !== "" && activity !== "" && duration > 0) {
    activities.push({
      date: date,
      activity: activity,
      duration: duration,
    });

    formActivity.reset();
    displayNotSetActivity.style.display = "none";

    showActivity(date, activity, duration);
    separateActivities();
  }
}

function setLimit(event) {
  event.preventDefault();
  limit = Number(document.getElementById("limit").value);

  if (limit !== "" && limit !== null && limit !== undefined && limit > 0) {
    showLimitElement.innerHTML = limit;
    formLimit.reset();

    displayLimit.style.display = "block";
    displayNotSetLimit.style.display = "none";
  }
}

function showActivity(date, activity, duration) {
  if (!isActivityTableExist) {
    isActivityTableExist = true;

    const table = document.createElement("table");
    table.setAttribute("id", "activity-table");
    table.setAttribute("class", "table");
    const header = document.createElement("tr");
    const headerTitle = document.createElement("th");
    headerTitle.setAttribute("colspan", "4");
    const activityTableTitles = document.createElement("tr");
    const dateTitle = document.createElement("th");
    const activityTitle = document.createElement("th");
    const durationTitle = document.createElement("th");

    const row = document.createElement("tr");
    const dateElement = document.createElement("td");
    const activityElement = document.createElement("td");
    const durationElement = document.createElement("td");

    const headerTitleContent = document.createTextNode("Your Activities");
    headerTitle.appendChild(headerTitleContent);

    const dateTitleContent = document.createTextNode("Date");
    dateTitle.appendChild(dateTitleContent);

    const activityTitleContent = document.createTextNode("Activity");
    activityTitle.appendChild(activityTitleContent);

    const durationTitleContent = document.createTextNode("Duration");
    durationTitle.appendChild(durationTitleContent);

    const dateContent = document.createTextNode(date);
    dateElement.appendChild(dateContent);

    const activityContent = document.createTextNode(activity);
    activityElement.appendChild(activityContent);

    const durationContent = document.createTextNode(duration);
    durationElement.appendChild(durationContent);

    activityTableTitles.appendChild(dateTitle);
    activityTableTitles.appendChild(activityTitle);
    activityTableTitles.appendChild(durationTitle);
    row.appendChild(dateElement);
    row.appendChild(activityElement);
    row.appendChild(durationElement);

    table.appendChild(headerTitle);
    table.appendChild(activityTableTitles);
    table.appendChild(row);

    activityTableContainer.appendChild(table);
  } else {
    const table = document.getElementById("activity-table");

    const row = document.createElement("tr");
    const dateElement = document.createElement("td");
    const activityElement = document.createElement("td");
    const durationElement = document.createElement("td");

    const dateContent = document.createTextNode(date);
    dateElement.appendChild(dateContent);

    const activityContent = document.createTextNode(activity);
    activityElement.appendChild(activityContent);

    const durationContent = document.createTextNode(duration);
    durationElement.appendChild(durationContent);

    row.appendChild(dateElement);
    row.appendChild(activityElement);
    row.appendChild(durationElement);
    table.appendChild(row);
  }
}

function separateActivities() {
  const separatedActivitiesByDate = {};

  activities.forEach((obj) => {
    separatedActivitiesByDate[obj.date] =
      separatedActivitiesByDate[obj.date] || [];
    separatedActivitiesByDate[obj.date].push(obj);
  });

  showSpecificDayTable(separatedActivitiesByDate);
}

function showSpecificDayTable(separatedActivitiesByDate) {
  for (specificDay in separatedActivitiesByDate) {
    let total = 0;
    for (i in separatedActivitiesByDate[specificDay]) {
      total += separatedActivitiesByDate[specificDay][i].duration;

      const date = specificDay;
      const numbers = separatedActivitiesByDate[specificDay].length;
      const max = separatedActivitiesByDate[specificDay].reduce(function (
        prev,
        current
      ) {
        return prev && prev.duration > current.duration ? prev : current;
      });
      const maxDuration = max.duration;
      const maxActivity = max.activity;

      if (existedDate.includes(date)) {
        document.getElementById(date).remove();
        setTable(date, numbers, total, maxActivity, maxDuration);
      } else {
        existedDate.push(date);
        setTable(date, numbers, total, maxActivity, maxDuration);
      }

      checkLimit(date, total);
    }
  }
}

function setTable(date, numbers, total, maxActivity, maxDuration) {
  const table = document.createElement("table");
  table.setAttribute("id", date);
  table.setAttribute("class", "table");
  const header = document.createElement("tr");
  const headerDate = document.createElement("th");
  headerDate.setAttribute("colspan", "4");
  const daysTableTitle = document.createElement("tr");
  const numbersTitle = document.createElement("th");
  const totalTitle = document.createElement("th");
  const maxActivityTitle = document.createElement("th");
  const maxDurationTitle = document.createElement("th");

  const row = document.createElement("tr");
  const numbersElement = document.createElement("td");
  const totalElement = document.createElement("td");
  const maxActivityElement = document.createElement("td");
  const maxDurationElement = document.createElement("td");

  const headerDateContent = document.createTextNode(date);
  headerDate.appendChild(headerDateContent);

  const numbersTitleContent = document.createTextNode("Numbers of Activities");
  numbersTitle.appendChild(numbersTitleContent);

  const totalTitleContent = document.createTextNode("Total Duration");
  totalTitle.appendChild(totalTitleContent);

  const maxActivityTitleContent = document.createTextNode("Max Activity");
  maxActivityTitle.appendChild(maxActivityTitleContent);

  const maxDurationTitleContent = document.createTextNode("Max Duration");
  maxDurationTitle.appendChild(maxDurationTitleContent);

  const numbersContent = document.createTextNode(numbers);
  numbersElement.appendChild(numbersContent);

  const totalContent = document.createTextNode(total);
  totalElement.appendChild(totalContent);

  const maxActivityContent = document.createTextNode(maxActivity);
  maxActivityElement.appendChild(maxActivityContent);

  const maxDurationContent = document.createTextNode(maxDuration);
  maxDurationElement.appendChild(maxDurationContent);

  header.appendChild(headerDate);
  daysTableTitle.appendChild(numbersTitle);
  daysTableTitle.appendChild(totalTitle);
  daysTableTitle.appendChild(maxActivityTitle);
  daysTableTitle.appendChild(maxDurationTitle);
  row.appendChild(numbersElement);
  row.appendChild(totalElement);
  row.appendChild(maxActivityElement);
  row.appendChild(maxDurationElement);

  table.appendChild(header);
  table.appendChild(daysTableTitle);
  table.appendChild(row);

  daysTableContainer.appendChild(table);
}

function checkLimit(date, total) {
  if (total > limit && !overLimitDates.includes(date)) {
    overLimitDates.push(date);
    const overLimit = document.createElement("p");

    const overLimitContent = document.createTextNode(
      `You Reached Your Daily Limit On date: ${date}`
    );
    overLimit.appendChild(overLimitContent);

    displayOverLimit.style.color = "red";
    displayOverLimit.appendChild(overLimit);
  }
}
