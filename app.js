function makeGrid() {

    let grid = $('.grid');

    function makePalette() {

        for (i = 0; i < 64; i++) {
            let newCell = ('<div class="cell"></div>');
            grid.append(newCell);
        }

        let PALETTE = [
            'red', 'orange', 'yellow', 'green', 'blue'
        ]

        for (let i = 0; i < PALETTE.length; i++) {
            const nextColor = PALETTE[i];
            const button = $('<button>').css('background-color', nextColor);
            $('.palette').append(button);

            $('.palette button').first().addClass('active');
        }
    }
    makePalette();
}
makeGrid();

function onPaletteClick() {
    $('.palette button').removeClass('active');
    $(this).addClass('active');
}

$('.palette button').click(onPaletteClick);

function onGridClick() {
    $('.grid .cell').click(function () {
        if ($(this).css('background-color') == $('.palette .active').css('background-color')) {
            $(this).css('background-color', '');
        } else {
            $(this).css('background-color', $('.palette .active').css('background-color'));
        }
    });
}
onGridClick();

function onFillEmptyClick() {

    const elements = $('.grid .cell');

    let activeColor = $('.palette .active').css('background-color');

    for (let index = 0; index < elements.length; index++) {
        let nextElement = $(elements[index]);

        if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
            nextElement.css('background-color', activeColor);
        }
    }
}

$('.controls .fill-empty').click(onFillEmptyClick);

function onClearClick() {
    $('.grid .cell').css('background-color','rgba(0, 0, 0, 0)'); // Compare with previous function - '' vs rgba 0's. does unclicking work? ^ Update:fixed
}
onClearClick();

$('.controls .clear').click(onClearClick);

function onFillAllClick() {
    $('.grid .cell').css('background-color', $('.palette .active').css('background-color'));
}

$('.controls .fill-all').click(onFillAllClick);

// When placed at the end, onFillEmptyClick would not work at all, then would only work once. Why?