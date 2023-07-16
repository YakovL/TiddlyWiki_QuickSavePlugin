/***
|Description|Enables Ctrl + S hotkey to save changes (and not browser default action)|
|Version    |1.1|
|Author     |Yakov Litvin|
|Source     |https://github.com/YakovL/TiddlyWiki_QuickSavePlugin/blob/master/QuickSavePlugin.js|
|License    |[[MIT|https://github.com/YakovL/TiddlyWiki_YL_ExtensionsCollection/blob/master/Common%20License%20(MIT)]]|
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