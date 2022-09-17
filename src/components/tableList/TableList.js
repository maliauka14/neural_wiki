import React, { useState } from "react";

import './tableList.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import OwnTableElement from "../ownTableElement/OwnTableElement";


const TableList = () => {

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
                        placeholder='Search neural network'
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
                            <option className="filter_select_element" disabled>This is a native select element</option>
                            <option className="filter_select_element">Apples</option>
                            <option className="filter_select_element">Bananas</option>
                            <option className="filter_select_element">Grapes</option>
                            <option className="filter_select_element">Oranges</option>
                        </select>
                        <select class="filter_select">
                            <option className="filter_select_element">This is a native select element</option>
                            <option className="filter_select_element">Apples</option>
                            <option className="filter_select_element">Bananas</option>
                            <option className="filter_select_element">Grapes</option>
                            <option className="filter_select_element">Oranges</option>
                        </select>
                        <select class="filter_select">
                            <option className="filter_select_element">This is a native select element</option>
                            <option className="filter_select_element">Apples</option>
                            <option className="filter_select_element">Bananas</option>
                            <option className="filter_select_element">Grapes</option>
                            <option className="filter_select_element">Oranges</option>
                        </select>

                    </section>}

                <section className='data_field'>
                    <h2 className="data_counter">{searchValue.trim() ? `Found 47 articles on your search: ${searchValue}` : 'You can show 47 neurals now'} </h2>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                    <OwnTableElement/>
                </section>

                <section className='pagination_field'>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default TableList;