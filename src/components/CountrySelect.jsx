/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Combobox, InputBase, useCombobox, Loader } from '@mantine/core';
import axios from 'axios';

export default function CountrySelect({value, setValue}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    // console.log(search)

    useEffect(() => {
        if (search.trim() === '') {
            setData([]);
            return;
        }
        setLoading(true);
        const timeoutId = setTimeout(async () => {
            try {
                const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${search}&format=json&limit=10`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching location data:', error);
                setData([]);
            } finally {
                setLoading(false);
            }
        }, 1000);
    
        return () => clearTimeout(timeoutId);
    }, [search]);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption()
    });

    // const shouldFilterOptions = data?.every((item) => item !== search);
    // const filteredOptions = shouldFilterOptions
    //     ? data.filter((item) => item?.toLowerCase().includes(search.toLowerCase().trim()))
    //     : data;

    const options = data?.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item.display_name}
        </Combobox.Option>
    ));

    return (
        <div className='input-field'>
            <Combobox
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
                setValue(val.display_name);
                setSearch(val.display_name);
                combobox.closeDropdown();
            }}
            >
                <Combobox.Target>
                    <InputBase
                        label='Your location'
                        rightSection={loading ? <Loader size={18} /> : <Combobox.Chevron />}
                        value={search}
                        onChange={(event) => {
                            combobox.openDropdown();
                            combobox.updateSelectedOptionIndex();
                            setSearch(event.currentTarget.value);
                        }}
                        onClick={() => combobox.openDropdown()}
                        onFocus={() => combobox.openDropdown()}
                        onBlur={() => {
                            combobox.closeDropdown();
                            setSearch(value || '');
                        }}
                        placeholder="Search value"
                        rightSectionPointerEvents="none"
                        // {...register("location", { required: true })}
                    />
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Options>
                        {options?.length > 0 ? options : loading ? <Combobox.Empty>Loading....</Combobox.Empty> : <Combobox.Empty>Nothing found</Combobox.Empty>}
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>

            {!value && <span>*Your profile location is required</span>}
        </div>
    );
}