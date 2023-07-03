"use client";
import { useState, useEffect } from "react";
import { Button } from "@tremor/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mb-4 flex flex-row-reverse items-center justify-between">
      <Button onClick={handleChangeTheme}>Change theme</Button>
      <p className="text-xs uppercase text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Current theme: {theme}
      </p>
    </div>
  );
}
