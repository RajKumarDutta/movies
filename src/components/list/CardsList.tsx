import { Virtuoso } from "react-virtuoso";
import type { Movies } from "../../types/Movies";

type CardsListProps = {
  moviesList: Movies[];
};

export const CardsList = ({ moviesList }: CardsListProps) => {
  if (moviesList.length === 0) return <div style={{ color: "#fff" }}>No items found.</div>;

  // Modern Dark Styles
 const containerStyle: React.CSSProperties = {
    // Glassmorphism: semi-transparent white border and slight blur
    background: "rgba(255, 255, 255, 0.03)", 
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    margin: "20px",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.8)",
  };
  const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    borderBottom: "1px solid #222",
  };

  const columnStyle = (flex: number): React.CSSProperties => ({
    flex: flex,
    padding: "16px 8px",
    fontSize: "0.95rem",
    letterSpacing: "0.5px"
  });

  return (
    <div style={containerStyle}>
      {/* TABLE HEADER */}
      <div style={{ 
        ...rowStyle, 
        background: "rgba(255, 255, 255, 0.05)", // Glassmorphism effect
        fontWeight: "bold", 
        color: "#888",
        textTransform: "uppercase",
        fontSize: "0.8rem" 
      }}>
        <div style={columnStyle(0.5)}>ID</div>
        <div style={columnStyle(3)}>Inventory Item / Movie</div>
        <div style={columnStyle(1)}>Launch Year</div>
        <div style={columnStyle(1)}>Success Score</div>
      </div>

      {/* VIRTUALIZED TABLE BODY */}
      <Virtuoso
        style={{ height: "75vh" }}
        data={moviesList}
        itemContent={(index, movie) => (
          <div 
            style={{ 
              ...rowStyle, 
              background: index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
              transition: "background 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)")}
          >
            <div style={{ ...columnStyle(0.5), color: "#555" }}>{index + 1}</div>
            <div style={{ ...columnStyle(3), color: "#fff", fontWeight: 500 }}>{movie.title}</div>
            <div style={columnStyle(1)}>{movie.year}</div>
            <div style={{ ...columnStyle(1), color: "#00ffcc", fontWeight: "bold" }}>
              {movie.rating} <span style={{fontSize: '0.7rem', color: '#444'}}>pts</span>
            </div>
          </div>
        )}
      />
    </div>
  );
};