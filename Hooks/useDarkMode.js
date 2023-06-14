import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialvalue) => {
    const [darkmode, setDarkmode] = useLocalStorage("darkMode", initialvalue)
    return [darkmode, setDarkmode]
}