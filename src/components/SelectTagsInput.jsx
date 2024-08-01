/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Combobox, Pill, PillsInput, useCombobox, Group, CheckIcon, PillGroup } from '@mantine/core';
import { programmingAndDesignTools } from '../utils/data';
import LanguageIcons from './LanguageIcons/LanguageIcons';

export function SelectTagsInput({ style, value, setValue, isPending }) {
  const MAX_DISPLAYED_VALUES = 4;
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [data, setData] = useState(programmingAndDesignTools);
  // const [value, setValue] = useState([]);

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val) => setValue((current) => current.filter((v) => v !== val));

  const values = value.slice(0, MAX_DISPLAYED_VALUES === value.length ? MAX_DISPLAYED_VALUES : MAX_DISPLAYED_VALUES - 1).map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .slice(0, MAX_DISPLAYED_VALUES === data.length ? MAX_DISPLAYED_VALUES : MAX_DISPLAYED_VALUES - 1)
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <LanguageIcons language={item} />
        </Group>
      </Combobox.Option>
    ));

  return (
    <>
      <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
        <Combobox.DropdownTarget>
          <PillsInput
            variant='unstyled'
            className={style}
            size={'lg'}
            onClick={() => combobox.openDropdown()}>
            <Group>
              {value.length > 0 && (
                <>
                  {values}
                  {value.length > MAX_DISPLAYED_VALUES && (
                    <Pill>+{value.length - (MAX_DISPLAYED_VALUES - 1)} more</Pill>
                  )}
                </>
              )
              }

              <Combobox.EventsTarget>
                <PillsInput.Field
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                  disabled={isPending}
                  value={search}
                  placeholder="Search tags"
                  onChange={(event) => {
                    combobox.updateSelectedOptionIndex();
                    setSearch(event.currentTarget.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Backspace' && search.length === 0) {
                      event.preventDefault();
                      handleValueRemove(value[value.length - 1]);
                    }
                  }}
                />
              </Combobox.EventsTarget>
            </Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown>
          <Combobox.Options>
            {options}

            {!exactOptionMatch && search.trim().length > 0 && (
              <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
            )}

            {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      <PillGroup className='pills-group'>
        {programmingAndDesignTools.slice(0, 7).map((lang, index) => (
          <button onClick={() => handleValueSelect(lang)} className={value.includes(lang) ? 'pill-selected' : 'pill'} key={index}>
            <LanguageIcons language={lang} value={value} />
          </button>
        ))}
      </PillGroup>
    </>
  );
}
