import React, { useState } from "react";

const DateViewTable = ({ data }) => {
  const [sortedData, setSortedData] = useState(data || []);

  const sortByDate = () => {
    const sorted = [...sortedData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...sortedData].sort((a, b) => b.views - a.views);
    setSortedData(sorted);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {sortedData &&
            sortedData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DateViewTable;
