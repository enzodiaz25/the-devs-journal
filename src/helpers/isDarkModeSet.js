export default function isDarkModeSet() {
    let isDarkModeSet = false;
    let darkModeStorageItem = localStorage.getItem("dark_mode");
    let isSystemUsingDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (darkModeStorageItem == null && isSystemUsingDarkMode) {
        isDarkModeSet = true;
    } else {
        isDarkModeSet = darkModeStorageItem == "true";
    }
    return isDarkModeSet
}
