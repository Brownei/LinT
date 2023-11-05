
const Search = () => {
    return (
        <div className="search">
            <svg className="glass" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11.5801 3.92034C11.0788 3.40977 10.4813 3.00357 9.82219 2.7252C9.16304 2.44684 8.45527 2.30182 7.73977 2.29854C7.02426 2.29525 6.31519 2.43375 5.65351 2.70605C4.99183 2.97835 4.39066 3.37904 3.88472 3.88498C3.37877 4.39093 2.97808 4.9921 2.70578 5.65378C2.43348 6.31546 2.29498 7.02453 2.29827 7.74003C2.30156 8.45554 2.44657 9.16331 2.72494 9.82246C3.0033 10.4816 3.4095 11.0791 3.92007 11.5803C4.93904 12.5807 6.31181 13.1383 7.73977 13.1318C9.16772 13.1252 10.5353 12.555 11.545 11.5453C12.5548 10.5356 13.1249 9.16799 13.1315 7.74003C13.138 6.31208 12.5805 4.9393 11.5801 3.92034ZM2.74174 2.74201C4.01909 1.46498 5.73604 0.724156 7.54147 0.671036C9.34691 0.617916 11.1044 1.25651 12.4547 2.45623C13.8049 3.65596 14.6458 5.32617 14.8054 7.12532C14.965 8.92448 14.4313 10.7166 13.3134 12.1353L17.7676 16.5895L16.5892 17.7678L12.1351 13.3137C10.7159 14.4275 8.92528 14.9579 7.12846 14.7967C5.33163 14.6355 3.664 13.7949 2.46572 12.4463C1.26745 11.0977 0.628821 9.34273 0.680113 7.53942C0.731404 5.73612 1.46875 4.02031 2.74174 2.74201Z" fill="#999999"/>
            </svg>
            <div className="searchform">
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Search;