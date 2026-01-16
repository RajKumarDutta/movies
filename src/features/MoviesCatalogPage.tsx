import { useCallback, useEffect, useState, useMemo } from "react";
import { fetchTop100MoviesList } from "../services/MoviesService";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { CardsList } from "../components/list/CardsList";
import '../assets/styles.css'

const MoviesCatalogPage = () => {
  const dispatch = useAppDispatch();
  
  // 1. searchTerm tracks the input field (immediate)
  // 2. debouncedSearchTerm tracks the value used for filtering (delayed)
  const [searchTerm, setSearchTerm] = useState(""); 
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const { data, loading, error } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchTop100MoviesList());
  }, [dispatch]);

  // DEBOUNCE LOGIC: Wait 400ms after last keystroke before updating filter value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 400);

    return () => clearTimeout(timer); // Cleanup: cancel the timer if user types again
  }, [searchTerm]);

  const handleRefresh = useCallback(() => {
    setSearchTerm("");
    dispatch(fetchTop100MoviesList());
  }, [dispatch]);

  // Performance: Only re-filters when data changes OR debounced value changes
  const filteredMovies = useMemo(() => {
    console.log("Filtering logic executed"); // Check your console to see it's debounced!
    return data.filter((movie) =>
      movie.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [data, debouncedSearchTerm]);

  if (loading) {
    return (
      <div className="centered-container">
        <div className="loader"></div>
        <p>Syncing Inventory Data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered-container">
        <p className="error-text">⚠️ Connection Error: {error}</p>
        <button onClick={handleRefresh} className="btn">Retry Connection</button>
      </div>
    );
  }

  return (
    <div className="page-layout">
      <div className="header-section">
        <div className="title-group">
          <h1 className="title">Movies Catalog</h1>
          <p className="subtitle">Real-time Movie Stock Levels</p>
        </div>
        
        <div className="action-group">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search items by name..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={handleRefresh} className="btn">Refresh</button>
        </div>
      </div>

      <CardsList moviesList={filteredMovies} />
    </div>
  );
};

export default MoviesCatalogPage;