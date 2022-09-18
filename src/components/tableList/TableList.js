import React, { useState } from "react";

import './tableList.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import OwnTableElement from "../ownTableElement/OwnTableElement";


const TableList = ({ placeholderName, filters }) => {

    const [searchValue, setSearchValue] = useState('');
    const [usingFilters, setUsingFilters] = useState(false);

    return (
        <>
            <Header />
            <main>
                <section className='search_field'>
                    <input
                        type="search"
                        id="search_field_input"
                        className="search_field_input"
                        autoCapitalize="off"
                        placeholder={placeholderName}
                        autoCorrect="off"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                    <button
                        className='filter_button'
                        onClick={e => setUsingFilters(!usingFilters)}
                    >
                        Filter
                    </button>
                </section>

                {usingFilters &&
                    <section className='filter_field'>
                        <select className="filter_select">
                            <option className="filter_select_element">This is a native select element</option>
                            <option className="filter_select_element">Apples</option>
                            <option className="filter_select_element">Bananas</option>
                            <option className="filter_select_element">Grapes</option>
                            <option className="filter_select_element">Oranges</option>
                        </select>
                        <select className="filter_select">
                            <option className="filter_select_element">This is a native select element</option>
                            <option className="filter_select_element">Apples</option>
                            <option className="filter_select_element">Bananas</option>
                            <option className="filter_select_element">Grapes</option>
                            <option className="filter_select_element">Oranges</option>
                        </select>
                        <select className="filter_select">
                            <option className="filter_select_element">This is a native select element</option>
                            <option className="filter_select_element">Apples</option>
                            <option className="filter_select_element">Bananas</option>
                            <option className="filter_select_element">Grapes</option>
                            <option className="filter_select_element">Oranges</option>
                        </select>

                    </section>}

                <section className='data_field'>
                    <h2 className="data_counter">{searchValue.trim() ? `Found 47 articles on your search: ${searchValue}` : 'You can see 47 neurals now'} </h2>
                    <OwnTableElement key={1} />
                    <OwnTableElement key={2} />
                    <OwnTableElement key={3} />
                    <OwnTableElement key={4} />
                    <OwnTableElement key={5} />
                    <OwnTableElement key={6} />
                    <OwnTableElement key={7} />
                    <OwnTableElement key={8} />
                    <OwnTableElement key={9} />
                    <OwnTableElement key={10} />
                    <OwnTableElement key={11} />
                    <OwnTableElement key={12} />
                    <OwnTableElement key={13} />
                    <OwnTableElement key={14} />
                    <OwnTableElement key={15} />
                </section>

                <section className='pagination_field'>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default TableList;