const nazgulList = document.querySelectorAll('#nazgulList li');
let previousWord = ''

nazgulList.forEach(function(nazgul) {
    nazgul.addEventListener('mouseover', function() {
        previousWord = nazgul.textContent;
        nazgul.textContent = 'Nazgûl'; 
    });

    nazgul.addEventListener('mouseout', function() {
        nazgul.textContent = previousWord; 
    });
});