document.addEventListener("click", function () {
    
    let Name = document.querySelector('#Name');
    let clonedName = Name.cloneNode(true);
    clonedName.id = 'NameClone';
    document.body.appendChild(clonedName);

    let Age = document.querySelector('#Age');
    let clonedAge = Age.cloneNode(true);
    clonedName.id = 'AgeClone';
    document.body.appendChild(clonedAge);
    

});