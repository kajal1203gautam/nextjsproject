export default function Header() {



  const books = [
    { key: 'GEN', value: 'Genesis' },
    { key: 'EXO', value: 'Exodus' },
    { key: 'LEV', value: 'Leviticus' },
    { key: 'NUM', value: 'Numbers' },
    { key: 'DEU', value: 'Deuteronomy' },
    { key: 'JOS', value: 'Joshua' },
    { key: 'JDG', value: 'Judges' },
    { key: 'RUT', value: 'Ruth' },
    { key: '1SA', value: '1 Samuel' },
    { key: '2SA', value: '2 Samuel' },
    { key: '1KI', value: '1 Kings' },
    { key: '2KI', value: '2 Kings' },
    { key: '1CH', value: '1 Chronicles' },
    { key: '2CH', value: '2 Chronicles' },
    { key: 'EZR', value: 'Ezra' },
    { key: 'NEH', value: 'Nehemiah' },
    { key: 'EST', value: 'Esther' },
    { key: 'JOB', value: 'Job' },
    { key: 'PSA', value: 'Psalms' },
    { key: 'PRO', value: 'Proverbs' },
    { key: 'ECC', value: 'Ecclesiastes' },
    { key: 'SNG', value: 'Song of Songs' },
    { key: 'ISA', value: 'Isaiah' },
    { key: 'JER', value: 'Jeremiah' },
    { key: 'LAM', value: 'Lamentations' },
    { key: 'EZK', value: 'Ezekiel' },
    { key: 'DAN', value: 'Daniel' },
    { key: 'HOS', value: 'Hosea' },
    { key: 'JOL', value: 'Joel' },
    { key: 'AMO', value: 'Amos' },
    { key: 'OBA', value: 'Obadiah' },
    { key: 'JON', value: 'Jonah' },
    { key: 'MIC', value: 'Micah' },
    { key: 'NAM', value: 'Nahum' },
    { key: 'HAB', value: 'Habakkuk' },
    { key: 'ZEP', value: 'Zephaniah' },
    { key: 'HAG', value: 'Haggai' },
    { key: 'ZEC', value: 'Zechariah' },
    { key: 'MAL', value: 'Malachi' },
    { key: 'MAT', value: 'Matthew' },
    { key: 'MRK', value: 'Mark' },
    { key: 'LUK', value: 'Luke' },
    { key: 'JHN', value: 'John' },
    { key: 'ACT', value: 'Acts' },
    { key: 'ROM', value: 'Romans' },
    { key: '1CO', value: '1 Corinthians' },
    { key: '2CO', value: '2 Corinthians' },
    { key: 'GAL', value: 'Galatians' },
    { key: 'EPH', value: 'Ephesians' },
    { key: 'PHP', value: 'Philippians' },
    { key: 'COL', value: 'Colossians' },
    { key: '1TH', value: '1 Thessalonians' },
    { key: '2TH', value: '2 Thessalonians' },
    { key: '1TI', value: '1 Timothy' },
    { key: '2TI', value: '2 Timothy' },
    { key: 'TIT', value: 'Titus' },
    { key: 'PHM', value: 'Philemon' },
    { key: 'HEB', value: 'Hebrews' },
    { key: 'JAS', value: 'James' },
    { key: '1PE', value: '1 Peter' },
    { key: '2PE', value: '2 Peter' },
    { key: '1JN', value: '1 John' },
    { key: '2JN', value: '2 John' },
    { key: '3JN', value: '3 John' },
    { key: 'JUD', value: 'Jude' },
    { key: 'REV', value: 'Revelation' },
  ]



  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg-color">
        <div className="container">
          <a className="navbar-brand" href="#">Bible</a>
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
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <select name="" id="">
                <option value="" selected>Select Book</option>
                <option value="">Genesis</option>
                <option value="">Genesis</option>
                <option value="">Genesis</option>
                <option value="">Genesis</option>
              </select>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}