export default function Search_Bar({searchTerm, setSearchTerm}) {
    return (
        <div className="m-5 border-2 border-orange-500 rounded-full py-1 px-4">   
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-none outline-none w-full focus:ring-0 bg-transparent"
            />
        </div> 
    );
}   