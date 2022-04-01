function calc(){
    counter = 0
    row = document.getElementById(counter + '');

    if (row.getElementsByTagName("input")[0].value != ''){
        counter++
        row.innerHTML += '<tr id='+counter+'><td class="text-left"><input type="text" class="input" name="classe-min"> |--- <input type="text" class="input" name="classe-max"></td><td class="text-left"><input type="text" name="fi" class="input"></td><td></td><td></td></tr>'
    }

}
