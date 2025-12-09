"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import clsx from "clsx";

const Dropdown = ({ data }) => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={clsx(
          "relative block w-fit rounded-lg bg-purple-700 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
          "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
        )}
      >
        {selected.name}
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-(--button-width) rounded-xl border border-white/5 bg-purple-100 z-10 p-1 [--anchor-gap:--spacing(1)] focus:outline-none",
          "transition duration-100 ease-in data-leave:data-closed:opacity-0 "
        )}
      >
        {data.map((person) => (
          <ListboxOption
            key={person.name}
            value={person}
            className="group flex cursor-default  items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-purple-200"
          >
            <CheckIcon className="invisible size-4 fill-purple-700 group-data-selected:visible" />
            <div className="text-sm/6">{person.name}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default Dropdown;
