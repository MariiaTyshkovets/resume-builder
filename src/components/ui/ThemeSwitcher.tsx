import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-white cursor-pointer w-30"
    >
      {theme === 'dark' ? '☀ Light Mode' : '◖ Dark Mode'}
    </button>
  );
}

export default ThemeSwitcher;