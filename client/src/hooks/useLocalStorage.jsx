import React, { useEffect, useState } from "react";

const PREFIX = "whatsapp-clone-";

export default function useLocalStorage(key, initialValue) {
	const prefixedKey = PREFIX + key;

	const [value, setValue] = useState(() => {
		const jsonForm = localStorage.getItem(prefixedKey);

		if (jsonForm) return JSON.parse(jsonForm);
		else if (typeof initialValue === "function") return initialValue();
		else return initialValue;
	});

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])


	return [value, setValue];
}
