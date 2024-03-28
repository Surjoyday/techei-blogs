import { useEffect, useState } from "react";

function useThemeToggler() {
  const [isDark, setIsDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isDark]
  );

  return [isDark, setIsDark];
}

export default useThemeToggler;
