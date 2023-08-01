import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearching } from '../../redux/searchStringReducer';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearching(searchValue));
        setSearchValue('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." onChange={e => setSearchValue(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;