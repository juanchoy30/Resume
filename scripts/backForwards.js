import { loadLanguage } from './language.js';
import { changeButton } from './changeButton.js';

    // FOR BACKWARDS AND FORWARDS
export function backForwars() {
    let path = location.pathname;
    loadLanguage(path);
    /* The browser's location bar will display the corresponding 
       page from the history stack, so location.pathname is used 
       to obtain the path for the page that needs to be loaded.
       The 1 oadContent () function (in step 1) is called
       again, to retrieve the specified page.
    */
    changeButton(path);
}