function buildTask(obj) {
  let status = (obj.done) ? "done" : "todo"
  return `
  <li class="${status}">
    <span>${obj.name}</span>
    <span>${obj.urgency}</span>
    <span>${obj.deadline}</span>
    <input class='mark' type="checkbox" name="mark" value="${obj.id}" ${(obj.done) ? "checked" : ""}>
  </li>
  `
};
