export default function toggleTheme(isDarkMode) {
    if (isDarkMode) {
        document.documentElement.classList.remove("light-mode");
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("dark_mode", true)
      } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
        localStorage.setItem("dark_mode", false)
    }
}
