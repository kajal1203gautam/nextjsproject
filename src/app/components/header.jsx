"use client"
import { useContext } from 'react';
import { BookContext } from '../context/bookContext';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [selectedBook, setSelectedBook] = useState('');

  const{state, dispatch} = useContext(BookContext);
  console.log(state, 'state');
  const handleBookChange =(event)=>{
    const selectedValue = event.target.value;
    const numberOfChapters = authors[selectedValue];
    dispatch({type:'UPDATE_SELECTED_BOOK', chapter:numberOfChapters, payload: selectedValue})
    console.log(state,'erete');
    console.log(selectedValue);
    setSelectedBook(selectedValue);
   
    // localStorage.setItem('author', selectedValue)
    // localStorage.setItem('chapters', numberOfChapters)
    // console.log(numberOfChapters);
  }
  const style = {
    select_book: {
      padding: '10px 30px 10px 30px',
      cursor: 'pointer',

    }
  }
  const books = [
    { id: '0', key: 'title', value: 'SelectBook' },
    { id: '1', key: 'GEN', value: 'Genesis' },
    { id: '2', key: 'EXO', value: 'Exodus' },
    { id: '3', key: 'LEV', value: 'Leviticus' },
    { id: '4', key: 'NUM', value: 'Numbers' },
    { id: '5', key: 'DEU', value: 'Deuteronomy' },
    { id: '6', key: 'JOS', value: 'Joshua' },
    { id: '7', key: 'JDG', value: 'Judges' },
    { id: '8', key: 'RUT', value: 'Ruth' },
    { id: '9', key: '1SA', value: '1 Samuel' },
    { id: '10', key: '2SA', value: '2 Samuel' },
    { id: '11', key: '1KI', value: '1 Kings' },
    { id: '12', key: '2KI', value: '2 Kings' },
    { id: '13', key: '1CH', value: '1 Chronicles' },
    { id: '14', key: '2CH', value: '2 Chronicles' },
    { id: '15', key: 'EZR', value: 'Ezra' },
    { id: '16', key: 'NEH', value: 'Nehemiah' },
    { id: '17', key: 'EST', value: 'Esther' },
    { id: '18', key: 'JOB', value: 'Job' },
    { id: '19', key: 'PSA', value: 'Psalms' },
    { id: '20', key: 'PRO', value: 'Proverbs' },
    { id: '21', key: 'ECC', value: 'Ecclesiastes' },
    { id: '22', key: 'SNG', value: 'Song of Songs' },
    { id: '23', key: 'ISA', value: 'Isaiah' },
    { id: '24', key: 'JER', value: 'Jeremiah' },
    { id: '25', key: 'LAM', value: 'Lamentations' },
    { id: '26', key: 'EZK', value: 'Ezekiel' },
    { id: '27', key: 'DAN', value: 'Daniel' },
    { id: '28', key: 'HOS', value: 'Hosea' },
    { id: '29', key: 'JOL', value: 'Joel' },
    { id: '30', key: 'AMO', value: 'Amos' },
    { id: '31', key: 'OBA', value: 'Obadiah' },
    { id: '32', key: 'JON', value: 'Jonah' },
    { id: '33', key: 'MIC', value: 'Micah' },
    { id: '34', key: 'NAM', value: 'Nahum' },
    { id: '35', key: 'HAB', value: 'Habakkuk' },
    { id: '36', key: 'ZEP', value: 'Zephaniah' },
    { id: '37', key: 'HAG', value: 'Haggai' },
    { id: '38', key: 'ZEC', value: 'Zechariah' },
    { id: '39', key: 'MAL', value: 'Malachi' },
    { id: '40', key: 'MAT', value: 'Matthew' },
    { id: '41', key: 'MRK', value: 'Mark' },
    { id: '42', key: 'LUK', value: 'Luke' },
    { id: '43', key: 'JHN', value: 'John' },
    { id: '44', key: 'ACT', value: 'Acts' },
    { id: '45', key: 'ROM', value: 'Romans' },
    { id: '46', key: '1CO', value: '1 Corinthians' },
    { id: '47', key: '2CO', value: '2 Corinthians' },
    { id: '48', key: 'GAL', value: 'Galatians' },
    { id: '49', key: 'EPH', value: 'Ephesians' },
    { id: '50', key: 'PHP', value: 'Philippians' },
    { id: '51', key: 'COL', value: 'Colossians' },
    { id: '52', key: '1TH', value: '1 Thessalonians' },
    { id: '53', key: '2TH', value: '2 Thessalonians' },
    { id: '54', key: '1TI', value: '1 Timothy' },
    { id: '55', key: '2TI', value: '2 Timothy' },
    { id: '56', key: 'TIT', value: 'Titus' },
    { id: '57', key: 'PHM', value: 'Philemon' },
    { id: '58', key: 'HEB', value: 'Hebrews' },
    { id: '59', key: 'JAS', value: 'James' },
    { id: '60', key: '1PE', value: '1 Peter' },
    { id: '61', key: '2PE', value: '2 Peter' },
    { id: '62', key: '1JN', value: '1 John' },
    { id: '63', key: '2JN', value: '2 John' },
    { id: '64', key: '3JN', value: '3 John' },
    { id: '65', key: 'JUD', value: 'Jude' },
    { id: '66', key: 'REV', value: 'Revelation' },
  ]
  const authors = {
    Genesis:50,
    Exodus:40,
    Leviticus:27,
    Numbers:36,
    Deuteronomy: 34,
    Joshua:24,
    Judges:21,
    Ruth: 4,
    FirstSamuel: 31,
    SecondSamuel: 24,
    FirstKings: 22,
    SecondKings: 25,
    FirstChronicles: 29,
    SecondChronicles: 36,
    Ezra: 10,
    Nehemiah: 13,
    Esther: 10,
    Job: 42,
    Psalms:150,
    Proverbs: 31,
    Ecclesiastes: 12,
    SongOfSongs: 8,
    Isaiah: 66,
    Jeremiah: 52,
    Lamentations: 5,
    Ezekiel: 48,
    Daniel: 12,
    Hosea: 14,
    Joel: 3,
    Amos: 9,
    Obadiah: 1,
    Jonah: 4,
    Micah: 7,
    Nahum: 3,
    Habakkuk: 3,
    Zephaniah:3,
    Haggai: 2,
    Zechariah: 14,
    Malachi: 4,
    Matthew: 28,
    Mark: 16,
    Luke: 24,
    John: 21,
    Acts: 28,
    Romans: 16,
    FirstCorinthians: 16,
    SecondCorinthians: 13,
    Galatians: 6,
    Ephesians: 6,
    Philippians: 4,
    Colossians: 4,
    FirstThessalonians: 5,
    SecondThessalonians: 3,
    FirstTimothy: 6,
    SecondTimothy: 4,
    Titus: 3,
    Philemon: 1,
    Hebrews: 13,
    James: 5,
    FirstPeter: 5,
    SecondPeter: 3,
    FirstJohn: 5,
    SecondJohn: 1,
    ThirdJohan: 1,
    Jude: 1,
    Revelation: 22,
  }



  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg-color">
        <div className="container">
          <Link  className="navbar-brand" href={"/"}>Bible</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Book
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className=
                  "dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="">
              <select id="selectOption" name="selectOption" onChange={handleBookChange} value={selectedBook} className="select_book" style={style.select_book}>
                {
                  books.map((book) => {
                    return (
                      <option key={book.id} value={book.value}>{book.value}</option>
                    )
                  })
                }
              </select>

            </form>
          </div>
        </div>
      </nav>
    </>
  )
}