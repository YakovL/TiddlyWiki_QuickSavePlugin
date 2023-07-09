/***
|Description|Enables Ctrl + S hotkey to save changes (and not browser default action)|
|Version    |1.1|
|Author     |Yakov Litvin|
|Source     |https://github.com/YakovL/TiddlyWiki_QuickSavePlugin/blob/master/QuickSavePlugin.js|
***/
//{{{
jQuery(document).on('keydown', null, function($e) {
    if(readOnly) return

    if($e.ctrlKey && $e.originalEvent.code === 'KeyS') {
        saveChanges()
    
        if($e.preventDefault) $e.preventDefault()
        return false
    }
})    
//}}}