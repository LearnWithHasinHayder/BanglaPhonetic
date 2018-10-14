QTags.addButton('bnph-bangla', 'bangla', bnph_bangla);
QTags.addButton('bnph-english', 'english', bnph_english);

var bnph_initialized = false;

function bnph_bangla() {
    if (!bnph_initialized) {
        $(".wp-editor-area").bnKb({
            'switchkey': 'e',
            'driver': phonetic
        });
        bnph_initialized = true;
    } else {
        $(".wp-editor-area").bnKb.sw("b");
    }
}

function bnph_english() {
    $(".wp-editor-area").bnKb.sw("e");
}