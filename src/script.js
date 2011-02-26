if (document.title.match(/\| Poll:/)) {
    (function (cells) {
        var totalPoints = 0;

        for (var i=0; i<cells.length; i++) {
            if (cells[i].className === 'default') {
                totalPoints += parseInt(cells[i].textContent.match(/^[0-9]+/), 10);
            }
        }

        for (i=0; i<cells.length; i++) {
            if (cells[i].className === 'default') {
                var optionPoints = parseInt(cells[i].textContent.match(/^[0-9]+/), 10);

                cells[i].setAttribute('style', 'padding-left:.25em; border-left:' + 
                    (optionPoints / totalPoints) * 500 + 'px solid #dcb;');
            }
        }
    })(document.getElementsByTagName('table')[3].getElementsByTagName('td'));
}
