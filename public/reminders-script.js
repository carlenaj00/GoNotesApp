var input = document.querySelectorAll('#enter input[type=text]')[0],
  entries = {},
  completed = {},
  reminders = {
    create: function (text) {
      if (text != '') {
        var date = Date.now();
        var entry = new Date(date).toLocaleString();
        if (localStorage.entries) {
          entries = JSON.parse(localStorage.entries);
        }
        entries[entry] = text;
        localStorage.entries = JSON.stringify(entries);
        input.value = '';
        reminders.display('entries');
      }
      input.focus();
    },
    display: function (list) {
      var list = JSON.parse(localStorage[list]);
      for (var entry in list) {
        var box = document.createElement('section'),
          task = document.createElement('input'),
          time = document.createElement('input'),
          exit = document.createElement('input');
        task.type = 'text';
        time.type = 'text';
        // task.setAttribute(
        //   'onblur',
        //   'reminders.edit(this.value, this.parentNode.id)'
        // );
        task.value = list[entry];
        time.value = entry;
        exit.type = 'button';
        exit.setAttribute('onclick', 'reminders.complete(this.parentNode.id)');
        exit.value = '×';
        box.id = entry;
        box.appendChild(task);
        box.appendChild(time);
        box.appendChild(exit);
        if (!document.getElementById(entry)) {
          document
            .getElementsByTagName('body')[0]
            .insertBefore(box, document.getElementById('enter'));
        }
      }
    },
    edit: function (text, id) {
      entries = JSON.parse(localStorage.entries);
      entries[id] = text;
      localStorage.entries = JSON.stringify(entries);
    },
    complete: function (id) {
      entries = JSON.parse(localStorage.entries);
      if (localStorage.completed) {
        completed = JSON.parse(localStorage.completed);
      }
      completed[id] = entries[id];
      delete entries[id];
      localStorage.completed = JSON.stringify(completed);
      localStorage.entries = JSON.stringify(entries);
      reminders.display('entries');
      document.getElementById(id).remove();
    },
  };
document.onkeydown = function (e) {
  e = e || window.event;
  var charCode = typeof e.which == 'number' ? e.which : e.keyCode;
  if (charCode == 13) {
    reminders.create(input.value);
  } /* enter key creates new reminder */
};
reminders.display('entries');
