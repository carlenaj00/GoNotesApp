const addBox = document.querySelector('.add-box'),
  addFolder = document.querySelector('.add-folder-box'),
  popupBox = document.querySelector('.popup-box'),
  popupTitle = popupBox.querySelector('header p'),
  closeIcon = popupBox.querySelector('header i'),
  titleTag = popupBox.querySelector('input'),
  descTag = popupBox.querySelector('textarea'),
  folderTag = popupBox.querySelector('select');
addBtn = popupBox.querySelector('button');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const notes = JSON.parse(localStorage.getItem('notes') || '[]');
const folders = JSON.parse(localStorage.getItem('folders') || '[]');
console.log(folders, notes);
let isUpdate = false,
  updateId;

var select = document.getElementById('folder');

addBox.addEventListener('click', () => {
  popupTitle.innerText = 'Add A New Note';
  addBtn.innerText = 'Add Note';
  popupBox.classList.add('show');
  document.querySelector('body').style.overflow = 'hidden';
  if (window.innerWidth > 660) titleTag.focus();
});

addFolder.addEventListener('click', () => {
  var name = prompt('Enter folder name');
  if (name != null) {
    folders.push(name);
  }
  var element = document.createElement('option');
  element.textContent = name;
  element.value = name;
  select.appendChild(element);
  localStorage.setItem('folders', JSON.stringify(folders));
});

for (var i = 0; i < folders.length; i++) {
  var option = folders[i];
  var element = document.createElement('option');
  element.textContent = option;
  element.value = option;
  select.appendChild(element);
}

closeIcon.addEventListener('click', () => {
  isUpdate = false;
  titleTag.value = descTag.value = '';
  popupBox.classList.remove('show');
  document.querySelector('body').style.overflow = 'auto';
});

function showNotes() {
  if (!notes) return;
  document.querySelectorAll('.note').forEach((li) => li.remove());
  folders.forEach((folder) => {
    let htag = `<li class="folder">
                        <div class="details">
                            <p>${folder}</p>
                        </div>
                    </li>`;
    addBox.insertAdjacentHTML('afterend', htag);
    notes.forEach((note, id) => {
      if (note.folder == folder) {
        let filterDesc = note.description.replaceAll('\n', '<br/>');
        let liTag = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}', '${note.folder}')"><i class="uil uil-pen"></i>Edit</li>
                                    <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML('afterend', liTag);
      }
    });

    // notes.forEach((note, id) => {
    //   let filterDesc = note.description.replaceAll('\n', '<br/>');
    //   let liTag = `<li class="note">
    //                       <div class="details">
    //                           <p>${note.title}</p>
    //                           <span>${filterDesc}</span>
    //                       </div>
    //                       <div class="bottom-content">
    //                           <span>${note.date}</span>
    //                           <div class="settings">
    //                               <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
    //                               <ul class="menu">
    //                                   <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}', '${note.folder}')"><i class="uil uil-pen"></i>Edit</li>
    //                                   <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
    //                               </ul>
    //                           </div>
    //                       </div>
    //                   </li>`;
    //   addBox.insertAdjacentHTML('afterend', liTag);
  });
}
showNotes();

function showMenu(elem) {
  elem.parentElement.classList.add('show');
  document.addEventListener('click', (e) => {
    if (e.target.tagName != 'I' || e.target != elem) {
      elem.parentElement.classList.remove('show');
    }
  });
}

function deleteNote(noteId) {
  let confirmDel = confirm('Are you sure you want to delete this note?');
  if (!confirmDel) return;
  notes.splice(noteId, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  showNotes();
}

function updateNote(noteId, title, filterDesc, folder) {
  let description = filterDesc.replaceAll('<br/>', '\r\n');
  updateId = noteId;
  isUpdate = true;
  addBox.click();
  titleTag.value = title;
  descTag.value = description;
  folderTag.value = folder;
  popupTitle.innerText = 'Update a Note';
  addBtn.innerText = 'Update Note';
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let title = titleTag.value.trim(),
    description = descTag.value.trim(),
    folder = folderTag.value.trim();

  if (title || description || folder) {
    let currentDate = new Date(),
      month = months[currentDate.getMonth()],
      day = currentDate.getDate(),
      year = currentDate.getFullYear();

    let noteInfo = {
      title,
      description,
      date: `${month} ${day}, ${year}`,
      folder,
    };
    if (!isUpdate) {
      notes.push(noteInfo);
    } else {
      isUpdate = false;
      notes[updateId] = noteInfo;
    }
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
    closeIcon.click();
  }
});
