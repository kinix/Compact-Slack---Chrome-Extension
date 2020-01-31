var hideSearch = true;
var hideApps = true;
var hideTitles = true;

function run() {
    // Hide search bar
    if (hideSearch) {
        $('div[role="toolbar"]').hide();
    }

    // Hide apps button
    if (hideApps) {
        $('#Papps').hide();
    }

    // Hide section titles (channels, Direct Messages etc)
    if (hideTitles) {
        $('div[aria-label="Channels"]').html('').css('margin-top', '14px');
        $('div[aria-label="Direct Messages"]').html('').css('margin-top', '14px');
        $('div[aria-label="Recent Apps"]').html('').css('margin-top', '14px');
    }

    // Compact view
    $('.p-channel_sidebar__list div[role="listitem"]').css({
        'position': 'initial',
        'font-size': '14px'
    });

    $('.p-channel_sidebar__list div[role="listitem"] a').css('height', '23px');

    // Remove scroll in sidebar
    $('.c-scrollbar__track').hide();

    // Fix scroll problem
    $('.c-virtual_list__scroll_container').css('height', 'inherit');
}

// TODO: Find better way (on scroll or change?)
setInterval(run, 1000);