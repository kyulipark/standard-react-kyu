import React from "react";

const List = ({ countries, setCountries }) => {
  //삭제
  const deleteCountry = (name) => {
    setCountries(
      countries.filter((country) => {
        if (country.name !== name) {
          return country;
        }
      })
    );
    alert(`${name}이 삭제되었습니다.`);
  };

  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr-top">
          <td>국가명</td>
          <td>금메달</td>
          <td>은메달</td>
          <td>동메달</td>
          <td>삭제</td>
        </tr>
      </thead>

      <tbody className="tbody">
        {countries.map((country) => {
          return (
            <tr key={country.name}>
              <td>{country.name}</td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <button
                className="delbtn"
                onClick={() => deleteCountry(country.name)}
              >
                삭제
              </button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
