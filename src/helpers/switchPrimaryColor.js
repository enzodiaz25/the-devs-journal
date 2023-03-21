import { DARK_PRIMARY_COLORS, LIGHT_PRIMARY_COLORS } from "../constants"
import isDarkModeSet from "./isDarkModeSet"

export default function switchPrimaryColor() {
    const isDarkMode = isDarkModeSet()
    const colors = isDarkMode ? DARK_PRIMARY_COLORS : LIGHT_PRIMARY_COLORS
    const currentColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color")
    const currentColorIndex = colors.findIndex(alternativeColor => {
        return alternativeColor.toLowerCase() == currentColor.toLowerCase()
    })
    let newColor = colors[currentColorIndex + 1]
    if (currentColorIndex == -1 || newColor == undefined) {
        newColor = colors[0]
    }
    document.documentElement.style.setProperty('--primary-color', newColor);
}
