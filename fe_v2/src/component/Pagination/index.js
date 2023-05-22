import React from "react";
import "./index.css";
const Pagination = (props) => {
  const total =
    props.total % process.env.REACT_APP_PAGESIZE == 0
      ? props.total / process.env.REACT_APP_PAGESIZE
      : Math.floor(props.total / process.env.REACT_APP_PAGESIZE) + 1;
  const [page, setPage] = React.useState(1);
  const [listPage, setListPage] = React.useState([
    1,
    2,
    3,
    "...",
    total - 2,
    total - 1,
    total,
  ]);
  React.useEffect(() => {
    props.setPage(page);
    if (total >= 7) {
      if (page == 1 || page == 2) {
        setListPage([1, 2, 3, "...", total - 2, total - 1, total]);
      } else if (page > 2 && page < total - 4) {
        setListPage([
          page - 1,
          page,
          page + 1,
          "...",
          total - 2,
          total - 1,
          total,
        ]);
      } else if (page < total) {
        setListPage([1, 2, 3, "...", page - 1, page, page + 1]);
      }
    }
  }, [total, page]);

  return (
    <nav>
      <ul className="pagination" style={{ float: "right" }}>
        {total >= 7 && (
          <>
            <li
              className={`page-item ${page == 1 && "disabled"}`}
              onClick={(e) => {
                page > 1 && setPage(1);
              }}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                Start
              </div>
            </li>
            <li
              className={`page-item ${page == 1 && "disabled"}`}
              onClick={(e) => {
                page > 1 && setPage(page - 1);
              }}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                Previous
              </div>
            </li>
          </>
        )}
        {total >= 7
          ? listPage.map((item, index) => {
              return (
                <li
                  className={`page-item ${item == page && "active"}`}
                  onClick={(e) =>
                    setPage(
                      item == "..."
                        ? Math.floor(
                            (listPage[index - 1] + listPage[index + 1]) / 2
                          )
                        : item
                    )
                  }
                >
                  <div style={{ cursor: "pointer" }} className="page-link">
                    {item}
                  </div>
                </li>
              );
            })
          : Array(total)
              .fill(null)
              .map((item, index) => {
                return (
                  <li
                    className={`page-item ${index + 1 == page && "active"}`}
                    onClick={(e) => setPage(index + 1)}
                  >
                    <div style={{ cursor: "pointer" }} className="page-link">
                      {index + 1}
                    </div>
                  </li>
                );
              })}
        {total >= 7 && (
          <>
            <li
              className={`page-item ${page == total && "disabled"}`}
              onClick={(e) => {
                page < total && setPage(page + 1);
              }}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                Next
              </div>
            </li>
            <li
              className={`page-item ${page == total && "disabled"}`}
              onClick={(e) => {
                page < total && setPage(total);
              }}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                End
              </div>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
